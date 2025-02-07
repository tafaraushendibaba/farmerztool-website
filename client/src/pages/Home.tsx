import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StockImage from "@/components/shared/StockImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, Gauge, Trophy } from "lucide-react";

const aiFeatures = [
  {
    title: "Predictive Analytics",
    description: "AI-powered insights for crop yields, disease prevention, and market trends.",
    icon: Brain,
  },
  {
    title: "Smart Documentation",
    description: "Automated invoice and contract generation with intelligent templates.",
    icon: FileText,
  },
];

const managementFeatures = [
  {
    title: "Health Management",
    description: "Track animal health records, vaccination schedules, and medical history.",
  },
  {
    title: "Feed Management",
    description: "Optimize feed ratios, track inventory, and manage nutrition plans.",
  },
  {
    title: "Breeding Management",
    description: "Monitor breeding cycles, genetics, and reproductive health.",
  },
];

const benefits = [
  {
    title: "30% Time Savings",
    description: "Automate routine tasks and streamline daily operations.",
    icon: Gauge,
  },
  {
    title: "Improved Efficiency",
    description: "Make data-driven decisions with real-time insights and analytics.",
    icon: Trophy,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />

      {/* AI and ML Section */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence and machine learning to optimize your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Management Suite
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From health tracking to breeding management, FarmerzTool provides everything 
                you need to run your farm efficiently.
              </p>
              <div className="space-y-4">
                {managementFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <StockImage
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
              alt="Modern farm management"
              className="rounded-lg aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose FarmerzTool?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers who have transformed their operations with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto prose">
              <h3 className="text-2xl font-semibold mb-4">
                Transforming Agriculture Through Technology
              </h3>
              <p className="text-muted-foreground">
                FarmerzTool brings the power of modern technology to your farm. Our platform 
                helps you reduce costs, increase productivity, and make better decisions through 
                data-driven insights. With features like automated documentation, AI-powered 
                analytics, and comprehensive management tools, you can focus on what matters most: 
                growing your farm business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Farming Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of farmers who are using Farmerztool to streamline
                their operations and increase productivity.
              </p>
            </div>
            <StockImage
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
              alt="Beautiful farm landscape"
              className="rounded-lg aspect-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}