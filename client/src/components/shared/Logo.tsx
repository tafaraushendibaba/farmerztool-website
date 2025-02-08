import { Link } from "wouter";
import { useState } from "react";

export default function Logo() {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    console.error("Failed to load logo, attempted path: /images/logo.jpg");
    setError(true);
  };

  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        {!error && (
          <img 
            src="/images/logo.jpg"
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