import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Farm Management Software Built for Real Farmers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Designed specifically for small-scale farms, family operations, homesteaders, 
            and community farms. A practical, easy-to-use platform that helps you manage 
            your farm the way you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild>
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">Learn More</Link>
            </Button>
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
}