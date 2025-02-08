import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-8 md:py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FarmerzTool</h3>
            <p className="text-sm text-muted-foreground">
              Making farm management simpler and more efficient through data-driven decisions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/farmerztool/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/creativestudioszllc/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@FarmerzTool"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Download Our App</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://apps.apple.com/us/app/farmerztool"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiAppstore size={22} />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.farmerztool"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGoogleplay size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-primary/10" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FarmerzTool. Software developed and owned by Creative Studiosz LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}