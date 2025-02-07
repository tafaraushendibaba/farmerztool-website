import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

const APP_URL = "https://app.farmerztool.com";
const LOGIN_URL = `${APP_URL}/login`;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [location] = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg ${
                location === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
            <Button
              variant="ghost"
              onClick={() => window.open(LOGIN_URL, "_blank")}
            >
              Login
            </Button>
            <Button asChild>
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
