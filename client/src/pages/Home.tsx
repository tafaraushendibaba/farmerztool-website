import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StockImage from "@/components/shared/StockImage";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      
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
