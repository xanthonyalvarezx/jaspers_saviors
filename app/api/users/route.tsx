import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors)
    }
    prisma.user.create(body)
    return NextResponse.json(body)
}
