import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: RestProjectProps = await request.json();
    const newProjects = await db.projects.deleteMany({
      where: { name: body.newName },
    });
    return NextResponse.json(
      {
        success: `projects delete all`,
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
