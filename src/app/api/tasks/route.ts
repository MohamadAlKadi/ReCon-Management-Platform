import { NextRequest, NextResponse } from 'next/server'
import { TaskStatus } from '@prisma/client'
import prisma from '@/lib/prisma'

const taskSelect = {
  id: true,
  title: true,
  description: true,
  projectId: true,
  assignedToId: true,
  status: true,
  dueDate: true,
  createdAt: true,
  updatedAt: true,
} as const

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({ select: taskSelect })
    return NextResponse.json(tasks, { status: 200 })
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json(
      { error: { message: 'Failed to fetch tasks' } },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, projectId, description, assignedToId, status, dueDate } = body

    if (typeof title !== 'string' || !title.trim() || !Number.isInteger(projectId)) {
      return NextResponse.json(
        { error: { message: 'Invalid payload. Required fields: title and projectId (integer).' } },
        { status: 400 },
      )
    }

    if (assignedToId !== undefined && assignedToId !== null && !Number.isInteger(assignedToId)) {
      return NextResponse.json(
        { error: { message: 'Invalid payload. assignedToId must be an integer.' } },
        { status: 400 },
      )
    }

    if (status !== undefined && status !== null && (typeof status !== 'string' || !(status in TaskStatus))) {
      return NextResponse.json(
        {
          error: {
            message: 'Invalid payload. status must be one of PENDING, IN_PROGRESS, COMPLETED.',
          },
        },
        { status: 400 },
      )
    }

    const parsedDueDate = dueDate ? new Date(dueDate) : null

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { id: true },
    })

    if (!project) {
      return NextResponse.json(
        { error: { message: 'Project not found.' } },
        { status: 404 },
      )
    }

    if (assignedToId !== undefined && assignedToId !== null) {
      const assignedUser = await prisma.user.findUnique({
        where: { id: assignedToId },
        select: { id: true },
      })

      if (!assignedUser) {
        return NextResponse.json(
          { error: { message: 'Assigned user not found.' } },
          { status: 404 },
        )
      }
    }
    if (dueDate !== undefined && dueDate !== null && Number.isNaN(parsedDueDate?.getTime())) {
      return NextResponse.json(
        { error: { message: 'Invalid payload. dueDate must be a valid date string.' } },
        { status: 400 },
      )
    }

    const createdTask = await prisma.task.create({
      data: {
        title: title.trim(),
        description: typeof description === 'string' ? description.trim() : null,
        projectId,
        assignedToId: assignedToId ?? null,
        status: (status as TaskStatus | undefined) ?? TaskStatus.PENDING,
        dueDate: parsedDueDate,
      },
      select: taskSelect,
    })

    return NextResponse.json(createdTask, { status: 201 })
  } catch (error) {
    console.error('Error creating task:', error)
    return NextResponse.json(
      { error: { message: 'Failed to create task' } },
      { status: 500 },
    )
  }
}
