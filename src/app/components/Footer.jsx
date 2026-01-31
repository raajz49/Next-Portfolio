import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold tracking-tight">
              <span className="text-primary">Raajz</span> Koirala
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs text-center md:text-left">
              Forging digital experiences with the same precision and grit.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link href="https://github.com" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Created by the biggest</span>
            <span className="font-semibold text-primary">Australian Cricket</span>
            <span>fan. 🏏</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
