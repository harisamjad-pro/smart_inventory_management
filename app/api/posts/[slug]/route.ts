import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { slugify } from "@/lib/slugify";

// export async function GET(req: Request, { params }: { params: { slug: string } }) {
//   const { data, error } = await supabaseAdmin.from("posts").select("*").eq("slug", params.slug).single();
//   if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//   return NextResponse.json(data);
// }

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  const { title, content } = await req.json();
  const newSlug = slugify(title);

  const { data, error } = await supabaseAdmin
    .from("posts")
    .update({ title, content, slug: newSlug })
    .eq("slug", params.slug)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  const { error } = await supabaseAdmin.from("posts").delete().eq("slug", params.slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Deleted" });
}
