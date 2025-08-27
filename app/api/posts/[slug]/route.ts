import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { slugify } from "@/lib/slugify";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data, error } = await supabaseAdmin.from("posts").select("*").eq("slug", slug).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
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

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Deleted" });
}
