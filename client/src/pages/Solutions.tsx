import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sprout, LineChart, FileText, Egg,
  Tractor, Database, Calculator,
  Calendar, Bug, Beaker, Leaf,
  Beef, Heart, Apple, Baby,
  Receipt, FileSignature, Building,
  Home, Users, Scale,
  Warehouse // Using Warehouse instead of Garden for homesteaders
} from "lucide-react";

const solutions = [
  {
    title: "Crop Management",
    description: "Advanced crop tracking and optimization system",
    icon: Sprout,
    features: [
      {
        name: "Harvest Prediction",
        description: "AI-powered yield forecasting for better planning",
        icon: Calculator,
      },
      {
        name: "Crop Rotation Scheduler",
        description: "Optimize land use with smart rotation planning",
        icon: Calendar,
      },
      {
        name: "Disease & Pest Tracking",
        description: "Early detection and management of crop health issues",
        icon: Bug,
      },
      {
        name: "Soil Management",
        description: "Track and optimize soil nutrients and health",
        icon: Beaker,
      },
      {
        name: "Yield Recording",
        description: "Detailed harvest tracking and analysis",
        icon: Leaf,
      },
    ],
  },
  {
    title: "Livestock Management",
    description: "Comprehensive animal tracking and health management",
    icon: Beef,
    features: [
      {
        name: "Animal Records",
        description: "Complete digital inventory of your livestock",
        icon: Database,
      },
      {
        name: "Health Tracking",
        description: "Vaccination schedules and health records",
        icon: Heart,
      },
      {
        name: "Feed Management",
        description: "Optimize feed ratios and track consumption",
        icon: Apple,
      },
      {
        name: "Breeding Management",
        description: "Track breeding cycles and genealogy",
        icon: Baby,
      },
    ],
  },
  {
    title: "Finance & Accounting",
    description: "Complete financial management solution",
    icon: LineChart,
    features: [
      {
        name: "Income Tracking",
        description: "Monitor all revenue streams",
        icon: LineChart,
      },
      {
        name: "Expense Management",
        description: "Track and categorize all farm expenses",
        icon: Receipt,
      },
      {
        name: "Profit Analysis",
        description: "Detailed financial reports and forecasting",
        icon: Calculator,
      },
    ],
  },
  {
    title: "Document Management",
    description: "Automated document generation and tracking",
    icon: FileText,
    features: [
      {
        name: "Invoice Generator",
        description: "Create professional invoices instantly",
        icon: Receipt,
      },
      {
        name: "Contract Management",
        description: "Generate and track farming contracts",
        icon: FileSignature,
      },
      {
        name: "Receipt Tracking",
        description: "Digital storage of all transactions",
        icon: FileText,
      },
    ],
  },
  {
    title: "Hatchery Management",
    description: "Specialized tools for egg production",
    icon: Egg,
    features: [
      {
        name: "Egg Production Tracking",
        description: "Monitor laying patterns and productivity",
        icon: Database,
      },
      {
        name: "Incubation Management",
        description: "Track hatching cycles and success rates",
        icon: Calendar,
      },
      {
        name: "Quality Control",
        description: "Monitor and maintain egg quality standards",
        icon: Heart,
      },
    ],
  },
  {
    title: "Asset Management",
    description: "Track and maintain farm equipment and infrastructure",
    icon: Tractor,
    features: [
      {
        name: "Equipment Tracking",
        description: "Maintain inventory of all farm equipment",
        icon: Building,
      },
      {
        name: "Maintenance Scheduler",
        description: "Plan and track equipment maintenance",
        icon: Calendar,
      },
      {
        name: "Depreciation Tracking",
        description: "Monitor asset value and depreciation",
        icon: Calculator,
      },
    ],
  },
];

const targetAudience = [
  {
    title: "Small-Scale Farmers",
    description: "Perfect for farmers managing 1-50 acres, focusing on sustainable and efficient farming practices.",
    icon: Sprout,
  },
  {
    title: "Family Farms",
    description: "Built with multi-generational farms in mind, helping preserve and modernize family farming traditions.",
    icon: Home,
  },
  {
    title: "Homesteaders",
    description: "Ideal for self-sufficient homesteaders managing diverse crops and livestock on their property.",
    icon: Warehouse, // Changed from Garden to Warehouse
  },
  {
    title: "Community Farms",
    description: "Supporting collaborative farming initiatives and shared agricultural spaces.",
    icon: Users,
  },
  {
    title: "Medium-Scale Operations",
    description: "Scalable solutions for growing farms looking to optimize their operations.",
    icon: Scale,
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 border-b bg-muted/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Solutions Built By Farmers, For Farmers
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Practical tools designed specifically for small and medium-scale farming operations
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Who is this for section */}
          <section className="mb-24">
            <h2 className="text-3xl font-semibold text-center mb-12">Who is FarmerzTool For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {targetAudience.map((audience) => (
                <Card key={audience.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      <audience.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{audience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Existing solutions content */}
          <div className="space-y-24">
            {solutions.map((solution) => (
              <section key={solution.title} className="scroll-mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold">{solution.title}</h2>
                    <p className="text-lg text-muted-foreground mt-1">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solution.features.map((feature) => (
                    <Card key={feature.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="space-y-1">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-primary/10">
                            <feature.icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{feature.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}