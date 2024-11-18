import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
    try{
    const classes = await prisma.student.findMany();
    return new Response(JSON.stringify(classes), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
catch (error) {
    console.error("Error fetching students", error);
} 
return new Response(
    JSON.stringify({ error: "Internal server error", details: Error }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}  
