import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    duration: "30 days",
    description: "Try all features risk-free",
    features: [
      "Full access to all features",
      "Unlimited animals and crops",
      "All management tools",
      "Email support",
      "No credit card required"
    ],
  },
  {
    name: "Monthly",
    price: "$12",
    duration: "per month",
    description: "Perfect for growing farms",
    features: [
      "All Free Trial features",
      "Priority email support",
      "Advanced analytics",
      "Custom reporting",
      "Data export capabilities"
    ],
  },
  {
    name: "Annual",
    price: "$100",
    duration: "per year",
    description: "Best value - Save $24/year",
    features: [
      "All Monthly features",
      "2 months free",
      "Premium support",
      "API access",
      "Custom integrations",
      "Dedicated account manager"
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 border-b bg-muted/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Start with a 30-day free trial. No credit card required.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="flex-grow">
                  <CardTitle>
                    <div className="text-2xl font-bold">{plan.name}</div>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-lg text-muted-foreground ml-2">
                        {plan.duration}
                      </span>
                    </div>
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-auto" 
                    size="lg" 
                    variant={plan.name === "Annual" ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/request-demo">
                      {plan.name === "Free Trial" ? "Start Free Trial" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}