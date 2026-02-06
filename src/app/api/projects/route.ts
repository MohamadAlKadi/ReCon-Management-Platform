import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const projects = await prisma.project.findMany({ include: { company: true } })
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  const { name, companyId, startDate } = await req.json()
  // startDate required by your schema
  const project = await prisma.project.create({
    data: { name, companyId, startDate: new Date(startDate) },
  })
  return NextResponse.json(project)
}
