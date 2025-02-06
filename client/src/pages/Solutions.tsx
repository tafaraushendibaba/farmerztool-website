import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, LineChart, Sprout, Bell } from "lucide-react";

const solutions = [
  {
    title: "Farm Data Management",
    description: "Centralized place for managing all farm operations",
    icon: Database,
    benefits: [
      "Track crop cycles and yields",
      "Monitor resource usage",
      "Generate detailed reports",
    ],
  },
  {
    title: "Livestock Tracking",
    description: "Manage animal health, breeding, and production",
    icon: Sprout,
    benefits: [
      "Health records management",
      "Breeding cycle tracking",
      "Production analytics",
    ],
  },
  {
    title: "Finance Management",
    description: "Track farm income, expenses, and profitability",
    icon: LineChart,
    benefits: [
      "Income and expense tracking",
      "Profit analysis",
      "Budget planning",
    ],
  },
  {
    title: "Task & Reminder System",
    description: "Stay on top of farm tasks with calendar and reminders",
    icon: Bell,
    benefits: [
      "Automated task scheduling",
      "Custom notifications",
      "Team task assignment",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title}>
              <CardHeader>
                <solution.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
