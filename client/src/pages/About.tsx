import StockImage from "@/components/shared/StockImage";

export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Farmerztool</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're on a mission to make farm management simpler and more efficient
              by helping farmers track every aspect of their operations.
            </p>
            <p className="text-lg text-muted-foreground">
              Through innovative technology and data-driven insights, we empower
              farmers to make better decisions and improve their productivity.
            </p>
          </div>
          <StockImage
            src="https://images.unsplash.com/photo-1495625039471-091b4c9aaa85"
            alt="Farmer in the field"
            className="rounded-lg aspect-video"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p>
              Founded by Tafara Ushendibaba, Farmerztool was born from a deep
              understanding of the challenges faced by modern farmers. Having grown
              up in a farming community, Tafara witnessed firsthand the
              complexities of managing agricultural operations.
            </p>
            <p>
              What started as a simple tool for tracking farm tasks has evolved
              into a comprehensive platform that helps farmers across the globe
              manage their entire operations more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
