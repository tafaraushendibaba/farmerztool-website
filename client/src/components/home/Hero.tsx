import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Farmers Through Data-Driven Decisions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Manage your crops, livestock, and finances all in one place. 
            Make smarter decisions with Farmerztool's comprehensive farm management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
