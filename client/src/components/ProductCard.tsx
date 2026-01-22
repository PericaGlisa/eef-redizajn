import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full relative">
      {/* Badge */}
      {product.isNew && (
        <Badge className="absolute top-3 left-3 z-10 bg-accent hover:bg-accent/90 text-white border-none shadow-sm rounded-sm px-2">
          NOVO
        </Badge>
      )}

      {/* Image Container */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-secondary/30 p-8 flex items-center justify-center relative cursor-pointer overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{product.brand}</span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading font-semibold text-foreground text-lg leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-end justify-between gap-4 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-[0.65rem] text-muted-foreground uppercase font-semibold">Cena</span>
            <span className={`font-bold text-lg ${product.price ? 'text-primary' : 'text-accent'}`}>
              {product.price 
                ? `${product.price.toLocaleString('sr-RS')} RSD` 
                : 'Na upit'}
            </span>
          </div>
          
          <Button size="icon" className="h-10 w-10 rounded-full bg-primary hover:bg-accent text-white shadow-sm transition-all duration-300 group-hover:scale-110">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
