import { useState } from "react";
import Layout from "@/components/Layout";
import { Link, useRoute } from "wouter";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { ShoppingCart, Heart, Share2, FileText, Check, Phone, Truck, Shield, Box, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const productId = params?.id;
  const product = products.find(p => p.id === productId) || products[0]; // Fallback for demo
  
  // Demo logic: Ensure we have enough "similar" products to show a full row
  let similarProducts = products.filter(p => p.category === product.category && p.id !== product.id);
  if (similarProducts.length < 4) {
    const otherProducts = products.filter(p => p.category !== product.category && p.id !== product.id);
    similarProducts = [...similarProducts, ...otherProducts].slice(0, 4);
  }

  const crossSellProducts = products
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random()) // Shuffle for demo
    .slice(0, 4);

  // Mock multiple images for the gallery
  const images = [
    product.image,
    product.image, // In a real app these would be different views
    product.image,
    product.image
  ];

  return (
    <Layout>
      <div className="bg-white/50 backdrop-blur-md border-b border-border py-4 sticky top-[72px] z-40 transition-all">
        <div className="container mx-auto px-4">
           <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="uppercase text-[10px] tracking-widest font-bold hover:text-accent transition-colors">Početna</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products" className="uppercase text-[10px] tracking-widest font-bold hover:text-accent transition-colors">Proizvodi</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/products?category=${product.category}`} className="uppercase text-[10px] tracking-widest font-bold hover:text-accent transition-colors">{product.category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="uppercase text-[10px] tracking-widest font-black text-foreground">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Image Gallery */}
          <div className="lg:col-span-7 h-fit sticky top-32">
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="aspect-square bg-[#f8f8f8] border border-border rounded-none p-12 flex items-center justify-center relative overflow-hidden group mb-6"
            >
               <motion.img 
                 src={images[selectedImageIndex]} 
                 alt={product.name} 
                 className="w-full h-full object-contain mix-blend-multiply" 
               />
               {product.isNew && (
                <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                  Elitno Izdanje
                </div>
               )}
               <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur rounded-full hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                  <Share2 className="w-5 h-5" />
               </button>
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
               {images.map((img, i) => (
                 <div 
                    key={i} 
                    onClick={() => setSelectedImageIndex(i)}
                    className={`aspect-square bg-[#f8f8f8] border ${selectedImageIndex === i ? 'border-accent' : 'border-transparent'} p-4 cursor-pointer hover:border-accent/50 transition-colors flex items-center justify-center relative`}
                 >
                    <img src={img} alt="thumbnail" className={`w-full h-full object-contain mix-blend-multiply transition-opacity ${selectedImageIndex === i ? 'opacity-100' : 'opacity-60'}`} />
                    {selectedImageIndex === i && (
                        <motion.div layoutId="active-thumb" className="absolute inset-0 border-2 border-accent pointer-events-none" />
                    )}
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">{product.brand}</span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs text-muted-foreground ml-2">(4.9)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-8 leading-[0.9] tracking-tighter uppercase">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-8 mb-12 border-y border-border py-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Procena Cene</span>
                  <span className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
                    {product.price ? `${product.price.toLocaleString('sr-RS')} RSD` : 'NA ZAHTEV'}
                  </span>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Dostupnost</span>
                   <span className="text-sm font-bold text-accent flex items-center gap-2 bg-accent/5 px-3 py-1 rounded-full w-fit">
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      NA STANJU
                   </span>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">
                {product.description}
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 h-14 sm:h-16 text-lg font-bold uppercase tracking-widest rounded-none bg-primary hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Dodaj u Porudžbinu
                    </Button>
                    <div className="flex gap-4">
                         <Button variant="outline" size="icon" className="flex-1 sm:flex-none h-14 w-14 sm:h-16 sm:w-16 rounded-none border-border hover:border-accent hover:text-accent transition-colors">
                            <Heart className="h-6 w-6" />
                         </Button>
                         <Button variant="outline" size="icon" className="flex-1 sm:flex-none h-14 w-14 sm:h-16 sm:w-16 rounded-none border-border hover:border-accent hover:text-accent transition-colors">
                            <Share2 className="h-6 w-6" />
                         </Button>
                    </div>
                </div>
                <Button variant="outline" className="w-full h-16 text-lg font-bold uppercase tracking-widest rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Zatraži Tehnički List
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-t border-border">
                  <AccordionTrigger className="uppercase font-bold tracking-wider text-sm py-6 hover:text-accent transition-colors">Tehničke Specifikacije</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light">
                    <ul className="space-y-4 pb-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key} className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="text-xs uppercase tracking-wider">{key}</span>
                            <span className="font-bold text-foreground">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-t border-border">
                  <AccordionTrigger className="uppercase font-bold tracking-wider text-sm py-6 hover:text-accent transition-colors">Dokumentacija i Uputstva</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light pb-6">
                    <div className="space-y-3">
                         <div className="flex items-center justify-between p-4 border border-border bg-secondary/10 hover:border-accent transition-colors cursor-pointer group">
                             <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-primary" />
                                <div>
                                   <h4 className="font-bold text-foreground text-sm uppercase">Tehnički List</h4>
                                   <p className="text-[10px] text-muted-foreground">PDF • 2.4 MB</p>
                                </div>
                             </div>
                             <Button variant="ghost" size="sm" className="h-8 text-xs uppercase font-bold tracking-wider">Preuzmi</Button>
                         </div>
                         <div className="flex items-center justify-between p-4 border border-border bg-secondary/10 hover:border-accent transition-colors cursor-pointer group">
                             <div className="flex items-center gap-3">
                                <Box className="h-5 w-5 text-primary" />
                                <div>
                                   <h4 className="font-bold text-foreground text-sm uppercase">Uputstvo za Instalaciju</h4>
                                   <p className="text-[10px] text-muted-foreground">PDF • 1.1 MB</p>
                                </div>
                             </div>
                             <Button variant="ghost" size="sm" className="h-8 text-xs uppercase font-bold tracking-wider">Preuzmi</Button>
                         </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-t border-border border-b">
                  <AccordionTrigger className="uppercase font-bold tracking-wider text-sm py-6 hover:text-accent transition-colors">Garancija i Podrška</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light pb-6">
                    <div className="flex items-start gap-4">
                      <Shield className="h-10 w-10 text-accent flex-shrink-0" />
                      <div>
                          <h4 className="font-bold text-foreground mb-2">5 Godina Elitne Garancije</h4>
                          <p className="text-sm leading-relaxed">
                            Sveobuhvatna pokrivenost svih komponenti. Uključuje 24/7 prioritetnu tehničku podršku i servis na licu mesta u roku od 48h za registrovane poslovne partnere.
                          </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Cross Sell Section - Vertical List */}
              {crossSellProducts.length > 0 && (
                <div className="mt-12 pt-12 border-t border-border">
                  <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent"></span>
                    Možda će vas zanimati
                  </h3>
                  <div className="flex flex-col gap-6">
                    {crossSellProducts.map(p => (
                      <Link key={p.id} href={`/product/${p.id}`}>
                        <div className="group flex gap-4 cursor-pointer hover:bg-secondary/10 p-2 rounded-none transition-colors border border-transparent hover:border-border/50">
                          <div className="w-20 h-20 bg-[#f8f8f8] border border-border flex-shrink-0 flex items-center justify-center p-2 group-hover:border-accent/30 transition-colors">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[10px] text-accent uppercase font-bold tracking-wider mb-1">{p.brand}</span>
                            <h4 className="font-heading font-bold text-foreground text-sm leading-tight mb-2 group-hover:text-accent transition-colors line-clamp-2">
                              {p.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-black text-primary">
                                {p.price ? `${p.price.toLocaleString('sr-RS')} RSD` : 'NA ZAHTEV'}
                              </span>
                              <ArrowRight className="w-3 h-3 text-accent -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Related Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-24 border-t border-border pt-24 mb-24">
            <h2 className="text-3xl font-heading font-black text-foreground uppercase tracking-tighter mb-12 flex items-center gap-4">
              <span className="w-12 h-px bg-accent"></span>
              Slični Proizvodi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
