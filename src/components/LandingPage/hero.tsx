'use client';
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dr.AIT Student Portal</h1>
        <p className="text-xl mb-8">Access your academic resources, grades, and more in one place.</p>
        <Button size="lg" onClick={() => router.push("/create-profile")}>Get Started</Button>
      </div>
    </section>  
  ); 
}