import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse, type NextRequest } from "next/server";
import { slugify } from "@/lib/slugify";

export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  const { slug } = context.params;
  const { data, error } = await supabaseAdmin.from("posts").select("*").eq("slug", slug).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, context: { params: { slug: string } }) {
  const { slug } = context.params;
  const { title, content } = await req.json();
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

export async function DELETE(req: NextRequest, context: { params: { slug: string } }) {
  const { slug } = context.params;
  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Deleted" });
}
