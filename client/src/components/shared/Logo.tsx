import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <img 
          src="/logo.jpg"
          alt="FarmerzTool Logo" 
          className="h-8 md:h-10 w-auto cursor-pointer object-contain"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            console.error('Error loading logo:', e);
            img.style.display = 'none';
            // Show the text fallback when image fails
            const textFallback = img.parentElement?.querySelector('.logo-text') as HTMLElement;
            if (textFallback) {
              textFallback.style.display = 'block';
            }
          }}
        />
        <span className="logo-text text-xl font-bold text-primary hidden">
          FarmerzTool
        </span>
      </div>
    </Link>
  );
}