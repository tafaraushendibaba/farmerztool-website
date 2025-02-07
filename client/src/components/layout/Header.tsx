import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MobileNav from "./MobileNav";

// We can configure these URLs based on your web app's environment
const APP_URL = "https://app.farmerztool.com";
const LOGIN_URL = `${APP_URL}/login`;

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="space-x-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  className={`text-sm ${
                    location === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
}