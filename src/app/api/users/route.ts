import { NextRequest, NextResponse } from 'next/server'
import { Role } from '@prisma/client'
import prisma from '@/lib/prisma'

const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  companyId: true,
  createdAt: true,
  updatedAt: true,
} as const

export async function GET() {
  try {
    const users = await prisma.user.findMany({ select: userSelect })
    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: { message: 'Failed to fetch users' } },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password, role, companyId } = body

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      typeof email !== 'string' ||
      !email.trim() ||
      typeof password !== 'string' ||
      !password.trim() ||
      typeof role !== 'string' ||
      !(role in Role)
    ) {
      return NextResponse.json(
        {
          error: {
            message:
              'Invalid payload. Required fields: name, email, password, and role (WORKER|MANAGER|ADMIN).',
          },
        },
        { status: 400 },
      )
    }

    if (companyId !== undefined && companyId !== null && !Number.isInteger(companyId)) {
      return NextResponse.json(
        { error: { message: 'Invalid payload. companyId must be an integer.' } },
        { status: 400 },
      )
    }

    if (companyId !== undefined && companyId !== null) {
      const company = await prisma.company.findUnique({
        where: { id: companyId },
        select: { id: true },
      })

      if (!company) {
        return NextResponse.json(
          { error: { message: 'Company not found.' } },
          { status: 404 },
        )
      }
    }

    const createdUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        role: role as Role,
        companyId: companyId ?? null,
      },
      select: userSelect,
    })

    return NextResponse.json(createdUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: { message: 'Failed to create user' } },
      { status: 500 },
    )
  }
}
