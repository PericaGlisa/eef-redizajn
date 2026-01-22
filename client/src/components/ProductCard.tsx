import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Eye, ShoppingBag, Plus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { stop, start } = useSmoothScroll();

  return (
    <Dialog onOpenChange={(open) => open ? stop() : start()}>
    <div 
      className="group relative bg-white border border-border overflow-hidden transition-all duration-700 hover:border-accent hover:shadow-2xl hover:shadow-accent/5 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Numbering */}
      <div className="absolute top-4 right-4 text-[4rem] font-black text-black/[0.03] leading-none select-none z-0 group-hover:text-accent/10 transition-colors duration-500">
        {product.id.padStart(2, '0')}
      </div>

      {/* Image Section */}
      <div className="aspect-[4/5] bg-[#fdfdfd] p-12 flex items-center justify-center relative overflow-hidden z-10">
          <Link href={`/product/${product.id}`} className="absolute inset-0 z-20" />
          
          <motion.img 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply relative z-10"
          />
          
          {product.isNew && (
            <div className="absolute top-0 left-0 bg-accent text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] z-30">
              Elitno Izdanje
            </div>
          )}

          {/* Quick Actions Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30 flex gap-2 justify-center">
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary" className="rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg">
                <Eye className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <Button size="icon" variant="secondary" className="rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg">
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 z-10 bg-white relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-4 bg-accent" />
          <span className="text-[10px] font-black text-accent uppercase tracking-widest">{product.brand}</span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading font-bold text-primary text-xl leading-tight mb-6 hover:text-accent transition-colors cursor-pointer tracking-tighter uppercase line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border group-hover:border-accent/30 transition-colors">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">Procena</span>
            <span className="font-black text-xl tracking-tighter text-primary group-hover:text-accent transition-colors">
              {product.price 
                ? `${product.price.toLocaleString('sr-RS')} RSD` 
                : 'NA ZAHTEV'}
            </span>
          </div>
          <Link href={`/product/${product.id}`}>
            <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </span>
          </Link>
        </div>
      </div>
    </div>

    {/* Quick View Dialog Content */}
    <DialogContent className="max-w-5xl w-[95vw] md:w-full p-0 overflow-y-auto bg-white border-none rounded-none shadow-2xl max-h-[90vh] focus:outline-none">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px] lg:h-[650px]">
        {/* Left Side - Image */}
        <div className="bg-white p-6 md:p-12 flex items-center justify-center relative overflow-hidden group/image min-h-[250px] md:min-h-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center relative z-10"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
           <div className="absolute top-6 left-6 z-20">
             <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] bg-white/80 backdrop-blur-sm px-4 py-2 border border-white/50">
               Brzi Pregled
             </span>
           </div>
        </div>

        {/* Right Side - Details */}
        <div 
          className="p-5 md:p-12 flex flex-col bg-white relative md:overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="mb-3 md:mb-4 flex items-center gap-3">
             <span className="h-px w-6 md:w-8 bg-accent" />
             <span className="text-[10px] md:text-xs font-black text-accent uppercase tracking-[0.2em]">{product.brand}</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-heading font-black text-primary uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9]">
            {product.name}
          </h2>
          
          <div className="flex items-end gap-4 md:gap-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Cena</span>
              <span className="text-3xl md:text-4xl font-black text-primary tracking-tight">
                {product.price ? `${product.price.toLocaleString('sr-RS')} RSD` : 'NA ZAHTEV'}
              </span>
            </div>
            {product.price && (
               <div className="mb-1 md:mb-2">
                 <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 md:px-3 md:py-1 uppercase tracking-wider rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   Na Stanju
                 </span>
               </div>
            )}
          </div>

          <p className="text-muted-foreground font-light mb-6 md:mb-8 leading-relaxed text-sm md:text-lg">
            {product.description}
          </p>
          
          {/* Key Specs Preview */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-10">
            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
              <div key={key} className="bg-secondary/20 p-2 md:p-3 border border-transparent hover:border-accent/20 transition-colors">
                <span className="block text-[8px] md:text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5 md:mb-1">{key}</span>
                <span className="block text-xs md:text-sm font-bold text-primary">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 md:gap-4 mt-auto pt-4 md:pt-6">
            <Button className="flex-1 bg-primary hover:bg-accent text-white rounded-none h-12 md:h-14 uppercase tracking-widest font-black text-[10px] md:text-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <ShoppingBag className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Dodaj u Korpu
            </Button>
            <Link href={`/product/${product.id}`}>
               <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-none h-12 md:h-14 uppercase tracking-widest font-black text-[10px] md:text-xs transition-all duration-300">
                 Detaljnije <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
               </Button>
            </Link>
          </div>
        </div>
      </div>
    </DialogContent>
    </Dialog>
  );
}
