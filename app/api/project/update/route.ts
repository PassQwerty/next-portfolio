import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const body: UpdateProjectArgs = await request.json();
    const project = await db.projects.findFirst({
      where: { name: body.name },
    });
    if (project) {
      await db.projects.update({
        where: { id: project.id },
        data: {
          [body.property]: body.newProperty,
        },
      });
      return NextResponse.json(
        { success: `updated project ${project.name}` },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "project not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message, stack: (error as Error).stack },
      { status: 500 }
    );
  }
}
