import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <img 
          src="/images/logo.jpg"
          alt="FarmerzTool Logo" 
          className="h-8 md:h-10 w-auto cursor-pointer object-contain"
        />
        <span className="text-xl font-bold text-primary hidden">
          FarmerzTool
        </span>
      </div>
    </Link>
  );
}