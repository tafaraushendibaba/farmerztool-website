import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <img 
        src="/attached_assets/logo 1.jpg" 
        alt="FarmerzTool Logo" 
        className="h-8 w-auto cursor-pointer"
      />
    </Link>
  );
}