import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
//import { schema } from "../schema"
//Create validation with ZOD
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found!' }, { status: 404 })
    }
    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const body = await request.json();
    if (!body.name) {
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (params.id > 10)
        return NextResponse.json({ error: 'User not found!' }, { status: 404 })
    return NextResponse.json({ id: 1, name: body.name })
}

export async function DELETE(request: NextRequest, props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const body = request.json();
    if (!params.id) {
        return NextResponse.json({ error: 'user not found!' }, { status: 404 })
    }

    return NextResponse.json(body)
}
