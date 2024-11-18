import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, imageBase64 } = body;

    // Upload image to ImgBB
    const imgRes = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=134615ea47a2071d70c7ced71816f0e0`,
      {
        method: "POST",
        body: new URLSearchParams({ image: imageBase64 }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!imgRes.ok) {
      console.error("ImgBB upload failed", await imgRes.text());
      return new Response(
        JSON.stringify({ error: "Failed to upload image to ImgBB" }),
        { status: 500 }
      );
    }

    const imgData = await imgRes.json();

    if (!imgData.success) {
      console.error("ImgBB response error", imgData);
      return new Response(JSON.stringify({ error: "ImgBB upload error" }), {
        status: 500,
      });
    }

    // Create achievement in the database
    const newAchievement = await prisma.achievement.create({
      data: {
        title,
        description,
        imageUrl: imgData.data.url,
      },
    });

    return new Response(JSON.stringify(newAchievement), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating achievement:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
