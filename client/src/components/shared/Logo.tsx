import { Link } from "wouter";

export default function Logo() {
  // Using an absolute path from the public directory
  const logoPath = "/logo.jpg";
  console.log("Logo path:", logoPath); // Debug log

  return (
    <Link href="/">
      <img 
        src={logoPath}
        alt="FarmerzTool Logo" 
        className="h-8 md:h-10 w-auto cursor-pointer object-contain"
        onError={(e) => {
          console.error('Error loading logo:', e);
          e.currentTarget.style.display = 'none';
        }}
      />
    </Link>
  );
}