import { MainNav } from "../components/shadcnNav";
import  ModeToggle from "../components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center mr-4">
            <ModeToggle />
          </nav>
          
        </div>
        
      </div>
    </header>
  );
}