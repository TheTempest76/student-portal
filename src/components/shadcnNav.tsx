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
      </div>
    </>
  );
}