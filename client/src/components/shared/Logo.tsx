import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <img 
        src="/logo.jpg" 
        alt="FarmerzTool Logo" 
        className="h-8 md:h-10 w-auto cursor-pointer object-contain"
      />
    </Link>
  );
}