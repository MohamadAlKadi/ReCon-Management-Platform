import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const assetSelect = {
  id: true,
  name: true,
  type: true,
  assignedToId: true,
  projectId: true,
} as const

export async function GET() {
  try {
    const assets = await prisma.asset.findMany({ select: assetSelect })
    return NextResponse.json(assets, { status: 200 })
  } catch (error) {
    console.error('Error fetching assets:', error)
    return NextResponse.json(
      { error: { message: 'Failed to fetch assets' } },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, type, projectId, assignedToId } = body

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      typeof type !== 'string' ||
      !type.trim() ||
      !Number.isInteger(projectId)
    ) {
      return NextResponse.json(
        {
          error: {
            message: 'Invalid payload. Required fields: name, type, and projectId (integer).',
          },
        },
        { status: 400 },
      )
    }

    if (assignedToId !== undefined && assignedToId !== null && !Number.isInteger(assignedToId)) {
      return NextResponse.json(
        { error: { message: 'Invalid payload. assignedToId must be an integer.' } },
        { status: 400 },
      )
    }


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

    const createdAsset = await prisma.asset.create({
      data: {
        name: name.trim(),
        type: type.trim(),
        projectId,
        assignedToId: assignedToId ?? null,
      },
      select: assetSelect,
    })

    return NextResponse.json(createdAsset, { status: 201 })
  } catch (error) {
    console.error('Error creating asset:', error)
    return NextResponse.json(
      { error: { message: 'Failed to create asset' } },
      { status: 500 },
    )
  }
}
