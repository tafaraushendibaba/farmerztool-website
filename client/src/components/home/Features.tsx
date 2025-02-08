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
    <section className="py-12 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Comprehensive Farm Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
                <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}