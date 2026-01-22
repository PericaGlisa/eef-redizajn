import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-border overflow-hidden transition-all duration-700 hover:border-accent flex flex-col h-full">
      {/* Editorial Numbering */}
      <div className="absolute top-4 right-4 text-[4rem] font-black text-black/[0.03] leading-none select-none z-0 group-hover:text-accent/5 transition-colors">
        {product.id.padStart(2, '0')}
      </div>

      {/* Image Section */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-[4/5] bg-[#fdfdfd] p-12 flex items-center justify-center relative cursor-pointer overflow-hidden z-10">
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply"
          />
          {product.isNew && (
            <div className="absolute top-0 left-0 bg-accent text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
              Elite Release
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 z-10 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-4 bg-accent" />
          <span className="text-[10px] font-black text-accent uppercase tracking-widest">{product.brand}</span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading font-bold text-primary text-xl leading-tight mb-6 hover:text-accent transition-colors cursor-pointer tracking-tighter uppercase">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">Valuation</span>
            <span className="font-black text-xl tracking-tighter text-primary group-hover:text-accent transition-colors">
              {product.price 
                ? `${product.price.toLocaleString('sr-RS')} RSD` 
                : 'UPON REQUEST'}
            </span>
          </div>
          <Link href={`/product/${product.id}`}>
            <span className="text-[10px] font-black border-b border-primary group-hover:border-accent group-hover:text-accent transition-all cursor-pointer py-1">DETAILS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
