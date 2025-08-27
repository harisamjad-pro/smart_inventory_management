import { NextResponse, NextRequest } from "next/server";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select()
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { title, content } = await request.json();

  if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });

  const slug = slugify(title);
  const { data, error } = await supabaseAdmin
    .from("posts")
    .insert([{ title, content, slug }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "POST Successful", data });
}
