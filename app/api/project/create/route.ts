import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const body: RestProjectProps = await request.json();
    const newProject = await db.projects.create({
      data: {
        img: body.newImg,
        name: body.newName,
        description: body.newDescription,
        allDescription: body.newAllDescription,
        tags: body.newTags,
        source: body.newSource,
        demo: body.newDemo,
      },
    });
    return NextResponse.json(
      { success: `created: ${newProject}` },
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
