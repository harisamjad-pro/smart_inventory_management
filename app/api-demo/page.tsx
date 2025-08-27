"use client";

import { Suspense, useEffect, useState } from "react";

export default function ApiDemoPage() {
  type Post = { id: string; slug: string; title: string; content: string };
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function fetchPosts() {
    const res = await fetch("/api/posts");
    setPosts(await res.json());
  }

  useEffect(() => { fetchPosts(); }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    setTitle(""); setContent("");
    fetchPosts();
  }

  async function handleDelete(slug: string) {
    await fetch(`/api/posts/${slug}`, { method: "DELETE" });
    fetchPosts();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">API Routes Demo</h1>

      <form onSubmit={handleCreate} className="space-y-2 mb-6">
        <input className="w-full border p-2" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea className="w-full border p-2" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>

      <Suspense fallback={<div className="text-red-500">Loading...</div>}>
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.id} className="border rounded p-3">
              <h2 className="font-semibold">{p.title}</h2>
              <p>{p.content}</p>
              <button onClick={() => handleDelete(p.slug)} className="text-red-600 mt-2">Delete</button>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
