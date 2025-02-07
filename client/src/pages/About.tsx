import StockImage from "@/components/shared/StockImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const valuePropositions = [
  "Custom-built for small and medium-scale farming operations",
  "Designed with input from real farmers and homesteaders",
  "Simplified tools that respect traditional farming practices",
  "Affordable solutions for family-run operations",
  "Community-focused approach to farm management",
];

const whyChooseUs = [
  {
    title: "Comprehensive Solution",
    description: "All-in-one platform for crop, livestock, and financial management",
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive design that requires minimal training to get started",
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security to protect your sensitive farm data",
  },
  {
    title: "Continuous Innovation",
    description: "Regular updates with new features and improvements",
  },
];

export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Farmerztool</h1>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're on a mission to empower small-scale and family farmers with practical, 
              easy-to-use technology. We believe that every farmer, from homesteaders to 
              medium-sized operations, deserves access to tools that respect their way of 
              farming while helping them grow and succeed.
            </p>
            <p className="text-lg text-muted-foreground">
              Through thoughtfully designed features and a deep understanding of real 
              farming needs, we help farmers maintain their traditional practices while 
              embracing modern efficiency - all without overwhelming complexity or 
              unnecessary features.
            </p>
          </div>
          <StockImage
            src="https://images.unsplash.com/photo-1495625039471-091b4c9aaa85"
            alt="Family farmer in the field"
            className="rounded-lg aspect-video"
          />
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Founded by Tafara Ushendibaba, Farmerztool was born from a deep
              understanding of the challenges faced by modern farmers. Having grown
              up in a farming community, Tafara witnessed firsthand the
              complexities of managing agricultural operations and the lack of
              accessible, comprehensive management tools.
            </p>
            <p className="text-lg mb-4">
              What started as a simple tool for tracking farm tasks has evolved
              into a comprehensive platform that helps farmers across the globe
              manage their entire operations more efficiently. Our journey has been
              guided by continuous feedback from farmers and agricultural experts,
              ensuring that Farmerztool addresses real-world farming challenges.
            </p>
            <p className="text-lg">
              Today, Farmerztool is trusted by farmers worldwide, helping them
              transform their traditional farming practices into data-driven,
              efficient operations. We continue to innovate and expand our
              platform, always keeping our core mission in focus: empowering
              farmers through technology.
            </p>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Value to Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Farmerztool delivers tangible benefits that help farmers optimize
                their operations and increase profitability. Our platform is
                designed to address the specific needs of modern farming.
              </p>
              <ul className="space-y-4">
                {valuePropositions.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <StockImage
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a8b4c5b"
              alt="Modern farming technology"
              className="rounded-lg aspect-video"
            />
          </div>
        </div>

        {/* Why FarmerzTool Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why FarmerzTool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}