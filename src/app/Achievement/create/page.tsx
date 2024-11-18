"use client";

import { useState } from "react";

export default function CreateAchievementPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = async () => {
      try {
        const base64Image = reader.result?.toString().split(",")[1];
        if (!base64Image) {
          throw new Error("Failed to convert image to Base64.");
        }

        const res = await fetch("/api/createachiv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            imageBase64: base64Image,
          }),
        });

        if (res.ok) {
          alert("Achievement created successfully!");
          setTitle("");
          setDescription("");
          setImage(null);
        } else {
          const errorData = await res.json();
          alert(`Failed to create achievement: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error creating achievement:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setLoading(false);
      alert("Failed to read the image. Please try again.");
    };
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Achievement</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded-md"
            rows={4}
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Upload Image:
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
