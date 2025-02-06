import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Beef, LineChart, Calendar } from "lucide-react";

const features = [
  {
    title: "Crop Management",
    description: "Track planting schedules, monitor growth, and optimize harvests.",
    icon: Sprout,
  },
  {
    title: "Livestock Management",
    description: "Monitor animal health, breeding cycles, and production records.",
    icon: Beef,
  },
  {
    title: "Financial Tracking",
    description: "Track expenses, revenue, and analyze farm profitability.",
    icon: LineChart,
  },
  {
    title: "Task & Reminder System",
    description: "Stay organized with automated task management and reminders.",
    icon: Calendar,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive Farm Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
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
  );
}