import Layout from "@/components/Layout";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, LayoutGrid, LayoutList } from "lucide-react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProductList() {
  const { stop, start } = useSmoothScroll();

  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-background pt-8 pb-12 border-b border-border sticky top-[72px] z-30 bg-white/80 backdrop-blur-md transition-all">
        <div className="container mx-auto px-4">
           <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="uppercase text-[10px] tracking-widest font-bold hover:text-accent transition-colors">Početna</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="uppercase text-[10px] tracking-widest font-black text-foreground">Proizvodi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground uppercase tracking-tighter leading-[0.9] mb-4">
                    Svi Proizvodi
                </h1>
                <p className="text-muted-foreground max-w-md font-light">
                    Istražite našu odabranu kolekciju elitnih uređaja dizajniranih za moderan život.
                </p>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Ukupno Stavki</span>
                    <span className="font-bold text-2xl leading-none">124</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Kolekcije</span>
                    <span className="font-bold text-2xl leading-none">08</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Desktop */}
          <aside 
            className="hidden lg:block w-64 flex-shrink-0 sticky top-48 h-[calc(100vh-12rem)] overflow-y-auto pr-4 scrollbar-hide"
            onWheel={(e) => e.stopPropagation()}
          >
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-black/5 pb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter */}
                <div className="lg:hidden">
                  <Sheet onOpenChange={(open) => {
                    if (open) stop();
                    else start();
                  }}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 uppercase text-xs font-bold tracking-widest rounded-none h-10 px-6 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
                        <SlidersHorizontal className="h-3 w-3" /> Filteri
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <div className="mt-8">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                
                <div className="hidden sm:flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none text-foreground bg-secondary/50">
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none text-muted-foreground hover:text-foreground">
                        <LayoutList className="h-4 w-4" />
                    </Button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[260px] border-none shadow-none bg-transparent font-bold uppercase text-xs tracking-widest text-right focus:ring-0">
                      <span className="mr-2 text-muted-foreground font-normal normal-case tracking-normal">Sortiraj po:</span>
                      <SelectValue placeholder="Sortiraj" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-none border-border">
                      <SelectItem value="popular" className="uppercase text-xs font-bold tracking-wider">Popularnosti</SelectItem>
                      <SelectItem value="price-asc" className="uppercase text-xs font-bold tracking-wider">Cena: Rastuća</SelectItem>
                      <SelectItem value="price-desc" className="uppercase text-xs font-bold tracking-wider">Cena: Opadajuća</SelectItem>
                      <SelectItem value="newest" className="uppercase text-xs font-bold tracking-wider">Najnovije</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
            </div>

            {/* Grid */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
              {/* Duplicate for demo to fill grid */}
              {products.map((product) => (
                <motion.div key={`dup-${product.id}`} variants={item}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

             {/* Pagination Demo */}
             <div className="mt-12 md:mt-24 flex justify-center border-t border-black/5 pt-8 md:pt-12">
                <div className="flex gap-2 flex-wrap justify-center">
                    <Button variant="outline" disabled className="rounded-none border-none text-muted-foreground hover:text-foreground uppercase text-xs font-bold tracking-widest">Prethodno</Button>
                    <div className="flex items-center gap-1 mx-2 md:mx-4">
                        <Button variant="default" className="bg-foreground text-background rounded-none h-8 w-8 p-0 text-xs font-bold">1</Button>
                        <Button variant="ghost" className="rounded-none h-8 w-8 p-0 text-xs font-bold text-muted-foreground hover:text-foreground">2</Button>
                        <Button variant="ghost" className="hidden sm:inline-flex rounded-none h-8 w-8 p-0 text-xs font-bold text-muted-foreground hover:text-foreground">3</Button>
                        <span className="flex items-center px-2 text-muted-foreground text-xs">...</span>
                        <Button variant="ghost" className="rounded-none h-8 w-8 p-0 text-xs font-bold text-muted-foreground hover:text-foreground">12</Button>
                    </div>
                    <Button variant="outline" className="rounded-none border-none text-foreground hover:text-accent uppercase text-xs font-bold tracking-widest">Sledeće</Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
