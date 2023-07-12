import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const body: RestProjectProps = await request.json();
    await db.projects.delete({
      where: { name: body.newName },
    });
    return NextResponse.json(
      { success: "deleted found project" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message, stack: (error as Error).stack },
      { status: 500 }
    );
  }
}
