import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Farmerztool</a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
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

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => window.open("https://app.farmerztool.com/login")}
          >
            Login
          </Button>
          <Button asChild>
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}