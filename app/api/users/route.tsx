import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log("body", body);
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword: hashedPassword
        }
    })
    return NextResponse.json({
        message: "User created successfully"
    })
}
