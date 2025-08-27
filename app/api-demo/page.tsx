"use client";

import { Suspense, useEffect, useState } from "react";

type Post = {
  slug: string;
  title: string;
  content: string;
  created_at: string;
};

export default function ApiDemoPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  async function fetchPosts() {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREATE
  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    fetchPosts();
  }

  // DELETE
  async function handleDelete(slug: string) {
    await fetch(`/api/posts/${slug}`, { method: "DELETE" });
    fetchPosts();
  }

  // START EDIT
  function startEdit(post: Post) {
    setEditingSlug(post.slug);
    setEditTitle(post.title);
    setEditContent(post.content);
  }

  // CANCEL EDIT
  function cancelEdit() {
    setEditingSlug(null);
    setEditTitle("");
    setEditContent("");
  }

  // UPDATE
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editingSlug) return;

    await fetch(`/api/posts/${editingSlug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle, content: editContent }),
    });

    cancelEdit();
    fetchPosts();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">API Routes Demo (CRUD with Slug)</h1>

      {/* Create Form */}
      <form onSubmit={handleCreate} className="space-y-2 mb-6">
        <input
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="w-full border p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      {/* List */}
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="border rounded p-3">
            {editingSlug === p.slug ? (
              // EDIT MODE
              <form onSubmit={handleUpdate} className="space-y-2">
                <input
                  className="w-full border p-2"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea
                  className="w-full border p-2"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="bg-gray-400 text-white px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              // VIEW MODE
              <>
                <h2 className="font-semibold">{p.title}</h2>
                <p>{p.content}</p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.slug)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
