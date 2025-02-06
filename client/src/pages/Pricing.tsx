import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small farms",
    features: [
      "Up to 100 animals",
      "Basic crop management",
      "Simple financial tracking",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing farm operations",
    features: [
      "Up to 500 animals",
      "Advanced crop management",
      "Detailed financial analytics",
      "Priority support",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large scale farming",
    features: [
      "Unlimited animals",
      "Custom features",
      "API access",
      "Dedicated support",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>
                  <div className="text-2xl font-bold">{plan.name}</div>
                  <div className="text-3xl font-bold mt-2">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-lg text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/request-demo">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
