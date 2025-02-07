import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StockImage from "@/components/shared/StockImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, Gauge, Trophy, Globe, Cloud, Smartphone, Wifi } from "lucide-react";

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

const platformFeatures = [
  {
    title: "Web Application",
    description: "Access FarmerzTool from any modern web browser",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Native apps for Android and iOS devices",
    icon: Smartphone,
  },
  {
    title: "Offline Mode",
    description: "Continue working without internet connection",
    icon: Wifi,
  },
  {
    title: "Cloud-Based",
    description: "Secure cloud storage with automatic backups",
    icon: Cloud,
  },
];

const getStartedSteps = [
  "Sign up for a free trial",
  "Set up your farm profile",
  "Import or enter your farm data",
  "Customize your dashboard",
  "Start managing your farm efficiently",
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />

      {/* AI and ML Section */}
      <section className="py-24 bg-muted/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence and machine learning to optimize your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Management Suite
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From health tracking to breeding management, FarmerzTool provides everything
                you need to run your farm efficiently.
              </p>
              <div className="space-y-6">
                {managementFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-4 rounded-lg bg-muted/5 hover:bg-muted/10 transition-colors">
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
              className="rounded-lg aspect-video shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-24 bg-muted/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Access Anywhere, Anytime
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FarmerzTool is designed to work seamlessly across all your devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Getting Started is Easy
              </h2>
              <div className="space-y-6">
                {getStartedSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <StockImage
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
              alt="Getting started with FarmerzTool"
              className="rounded-lg aspect-video shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose FarmerzTool?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers who have transformed their operations with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Transforming Agriculture Through Technology
              </h3>
              <p className="text-lg text-muted-foreground">
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
    </div>
  );
}