import db from "@/app/(actions)/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await db.projects.findMany();
    return NextResponse.json({ success: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message, stack: (error as Error).stack },
      { status: 500 }
    );
  }
}
