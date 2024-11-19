
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();// Adjust the import path for your Prisma client



export async function GET(req:Request, res:Response) {
  if (req.method !== "GET") {
    return Response.json({ error: "Method not allowed" });
  }

  try {
    // Fetch announcements from the database
    const announcements = await prisma.achievement.findMany({
      select: {
        imageUrl: true, // Select only the `imageUrl` field
      },
    });

    // Return the image URLs in the response
    return Response.json({ images: announcements.map((item) => item.imageUrl) });
  } catch (error) {
    console.error("Error creating student:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return new Response(
      JSON.stringify({ error: "Internal server error", details: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }}

