import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";
export function GET(request: NextRequest) {
    prisma.user.findMany()
    return NextResponse.json([
        { id: 1, name: "Anthony" },
        { id: 2, name: "Chelsea" },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors)
    }
    console.log(body)
    prisma.user.create(body)
    return NextResponse.json(body)
}
