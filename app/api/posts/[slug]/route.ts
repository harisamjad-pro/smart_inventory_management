import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";
import { slugify } from "@/lib/slugify";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  const { data, error } = await supabaseAdmin.from("posts").select("*").eq("slug", slug).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  const { title, content } = await request.json();
  const newSlug = slugify(title);

  const { data, error } = await supabaseAdmin
    .from("posts")
    .update({ title, content, slug: newSlug })
    .eq("slug", slug)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Deleted" });
}
