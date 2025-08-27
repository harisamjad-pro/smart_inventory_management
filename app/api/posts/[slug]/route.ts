import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { slugify } from "@/lib/slugify";

// GET one post by slug h
export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// UPDATE post
export async function PUT(
  request: Request,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
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

// DELETE post
export async function DELETE(
  request: Request,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: "Deleted" });
}
