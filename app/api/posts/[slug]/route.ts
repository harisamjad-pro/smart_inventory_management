import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

// 👇 Correct type import
import type { NextRequest } from "next/server";

type Params = {
  params: { slug: string };
};

// GET one post by slug
export async function GET(req: NextRequest, { params }: Params) {
  const { slug } = params;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { slug } = params;
  const { title, content } = await req.json();
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  const { data, error } = await supabaseAdmin
    .from("posts")
    .update({ title, content, slug: newSlug })
    .eq("slug", slug)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { slug } = params;

  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: "Deleted" });
}
