import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <img 
        src="/images/logo.jpg" 
        alt="FarmerzTool Logo" 
        className="h-8 w-auto cursor-pointer"
      />
    </Link>
  );
}