import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req:Request, res:Response) {
  try {
    const body = await req.json();
    const newStudent = await prisma.student.create({
      data: {
        Fname: body.name,
        usn: body.usn,
        Semester: body.semester,
        Branch: body.branch,
        academicAccomplishments: body.academicAccomplishments,
        sportsAccomplishments: body.sportsAccomplishments,
       
      },
    });
    return new Response(JSON.stringify(newStudent), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error creating student:", error);
  } 


  return new Response(
    JSON.stringify({ error: "Internal server error", details: Error }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}