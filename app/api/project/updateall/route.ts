import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const body: UpdateProjectArgs = await request.json();
    const project = await db.projects.updateMany({
      where: { name: body.name },
      data: {
        [body.property]: body.newProperty,
      },
    });
    return NextResponse.json(
      { success: `update all project ${project.count}` },
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
