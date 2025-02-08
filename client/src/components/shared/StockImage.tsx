interface StockImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function StockImage({ src, alt, className = "" }: StockImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
