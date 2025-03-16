
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";
import schema from "./schema";


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors,
            { status: 400 },
        )
    }
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (user) {
        const hashedPassword: string = user.hashedPassword?.toString() ?? '';
        const authorize = bcrypt.compareSync(body.password, hashedPassword)
        if (!authorize) {
            return NextResponse.json({
                error: "Password is incorrect"
            })
        }
    }
    return NextResponse.json({
        success: "success",
        status: 200
    })
}
