import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: CreateDataAllArgs = await request.json();
    const data = body.projects.map((project) => ({
      img: project.newImg,
      name: project.newName,
      description: project.newDescription,
      allDescription: project.newAllDescription,
      tags: project.newTags,
      source: project.newSource,
      demo: project.newDemo,
    }));
    const newProjects = await db.projects.createMany({
      data,
    });
    return NextResponse.json(
      {
        success: `projects created: ${newProjects.count}`,
      },
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
