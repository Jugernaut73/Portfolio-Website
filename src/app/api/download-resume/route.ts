import { getResumeUrl } from "@/sanity/lib/getResume";
import { NextResponse } from "next/server";

export async function GET() {
  const url = await getResumeUrl();  

  if (!url) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  const res = await fetch(url);
  const blob = await res.blob();
  const buffer = await blob.arrayBuffer();

  return new Response(Buffer.from(buffer), {
    headers: {
        "Content-Disposition": "attachment; filename=Zach_Ault_Resume.pdf",
        "Content-Type": "application/pdf",
    },
  });
}