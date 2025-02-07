import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

function calculateTimeLeft() {
  const launchDate = new Date("2025-06-01T00:00:00");
  const difference = launchDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-6">Launching Soon</h3>
      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Card key={unit} className="w-24">
            <CardContent className="p-4">
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-sm text-muted-foreground capitalize">{unit}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
