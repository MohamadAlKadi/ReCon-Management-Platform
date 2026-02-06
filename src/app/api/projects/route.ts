import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

function isValidDate(value: unknown): value is string {
  if (typeof value !== 'string' || !value.trim()) {
    return false
  }

  const parsedDate = new Date(value)
  return !Number.isNaN(parsedDate.getTime())
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({ include: { company: true } })
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()
    const { name, companyId, startDate } = payload

    if (typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'name is required.' }, { status: 400 })
    }

    if (typeof companyId !== 'number' || !Number.isInteger(companyId) || companyId <= 0) {
      return NextResponse.json({ error: 'companyId must be a positive integer.' }, { status: 400 })
    }

    if (!isValidDate(startDate)) {
      return NextResponse.json({ error: 'startDate must be a valid date string.' }, { status: 400 })
    }

    const project = await prisma.project.create({
      data: { name: name.trim(), companyId, startDate: new Date(startDate) },
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Failed to create project:', error)
    return NextResponse.json({ error: 'Failed to create project.' }, { status: 500 })
  }
}
