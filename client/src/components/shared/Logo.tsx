import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center">
        <img 
          src="/attached_assets/logo 1.jpg" 
          alt="FarmerzTool Logo" 
          className="h-8 w-auto"
        />
      </a>
    </Link>
  );
}
