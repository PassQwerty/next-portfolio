import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Props) {
  try {
    const prismaId = Number(params.id);
    const project = await db.projects.findFirst({
      where: {
        id: prismaId,
      },
    });
    return NextResponse.json({ success: project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message, stack: (error as Error).stack },
      { status: 500 }
    );
  }
}
