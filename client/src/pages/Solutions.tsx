import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sprout, LineChart, FileText, Egg, 
  Tractor, Database, Calculator, 
  Calendar, Bug, Beaker, Leaf,
  Beef, Heart, Apple, Baby,
  Receipt, FileSignature, Building
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

export default function Solutions() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solutions for Every Farmer</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools designed to optimize your farming operations
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution) => (
            <div key={solution.title} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <solution.icon className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">{solution.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                {solution.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.features.map((feature) => (
                  <Card key={feature.name}>
                    <CardHeader>
                      <feature.icon className="h-6 w-6 text-primary mb-2" />
                      <CardTitle className="text-xl">{feature.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}