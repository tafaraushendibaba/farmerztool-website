import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Farmerztool</h3>
            <p className="text-sm text-muted-foreground">
              Making farm management simpler and more efficient through data-driven decisions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about">About</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Farmerztool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
