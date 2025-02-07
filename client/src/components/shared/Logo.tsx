import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Logo() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.src = "/logo.jpg";
    img.onload = () => {
      console.log("Logo loaded successfully");
      setImageLoaded(true);
      setError(false);
    };
    img.onerror = (e) => {
      console.error("Error loading logo:", e);
      setError(true);
    };
  }, []);

  return (
    <Link href="/">
      <div className="flex items-center">
        {!error ? (
          <img 
            src="/logo.jpg"
            alt="FarmerzTool Logo" 
            className={`h-8 md:h-10 w-auto cursor-pointer object-contain transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setError(true)}
          />
        ) : null}
        <span 
          className={`text-xl font-bold text-primary ${
            error ? 'block' : 'hidden'
          }`}
        >
          FarmerzTool
        </span>
      </div>
    </Link>
  );
}