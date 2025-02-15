import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Logo() {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    console.log("Failed to load logo, attempted path: images/logo.jpg");
    console.log("Current public URL:", import.meta.env.BASE_URL);
    setError(true);
  };

  useEffect(() => {
    // Log the current environment and base URL
    console.log("Environment:", import.meta.env.MODE);
    console.log("Base URL:", import.meta.env.BASE_URL);
  }, []);

  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        {!error && (
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.jpg`}
            alt="FarmerzTool Logo" 
            className="h-8 md:h-10 w-auto cursor-pointer object-contain"
            onError={handleImageError}
          />
        )}
        <span className={`text-xl font-bold text-primary ${error ? 'block' : 'hidden'}`}>
          FarmerzTool
        </span>
      </div>
    </Link>
  );
}