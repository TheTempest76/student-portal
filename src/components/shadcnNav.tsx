"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <>
     

      <div className="mr-4 hidden md:flex ">
      <div>
          
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        
      </div>
      <nav className="flex items-center justify-center gap-4 text-sm lg:gap-6 pl-52 w-full" >
      <Link
        href="/Achievement/create"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "#about" ? "text-foreground" : "text-foreground/60"
        )}
          >
        🏆 Create Achievement
          </Link>
            <Link
            href="/Announcement/create"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "#about" ? "text-foreground" : "text-foreground/60"
            )}
            >
            📢 Create Announcements 
            </Link>
           

            <Link
        href="/student-dashboard"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "#about" ? "text-foreground" : "text-foreground/60"
        )}
          >
        🏆 View Achievements and Announcements
          </Link>
        </nav>
  
      </div>
    </>
  );
}