import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { categories, brands } from "@/lib/data";
import { Minus, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [openSection, setOpenSection] = useState<string | null>("categories");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-12 pb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Filtriraj Izbor</h2>
        <button className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-accent transition-colors">Poništi Sve</button>
      </div>

      {/* Categories */}
      <div className="border-t border-black/5 pt-6">
        <button 
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full group mb-4"
        >
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">Kategorije</h3>
            {openSection === "categories" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
        
        <AnimatePresence>
            {openSection === "categories" && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="space-y-3 pb-2">
                    {categories.map((cat) => (
                        <div key={cat.id} className="flex items-center space-x-3 group cursor-pointer py-1">
                        <Checkbox id={`cat-${cat.id}`} className="rounded-none border-muted-foreground/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
                        <Label 
                            htmlFor={`cat-${cat.id}`} 
                            className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer flex-1 flex justify-between items-center"
                        >
                            <span>{cat.name}</span>
                            <span className="text-[10px] text-muted-foreground/50 font-mono">({cat.count})</span>
                        </Label>
                        </div>
                    ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Brands */}
      <div className="border-t border-black/5 pt-6">
         <button 
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full group mb-4"
        >
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">Brendovi</h3>
            {openSection === "brands" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>

        <AnimatePresence>
            {openSection === "brands" && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="space-y-3 pb-2">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-3 group cursor-pointer py-1">
                        <Checkbox id={`brand-${brand}`} className="rounded-none border-muted-foreground/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
                        <Label htmlFor={`brand-${brand}`} className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer uppercase tracking-wide">
                            {brand}
                        </Label>
                        </div>
                    ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Price Range */}
      <div className="border-t border-black/5 pt-6">
        <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-6">Cenovni Opseg</h3>
        <div className="px-1 mb-6">
          <Slider 
            defaultValue={[0, 100000]} 
            max={200000} 
            step={1000}
            onValueChange={setPriceRange}
            className="py-4 [&>.relative>.absolute]:bg-accent"
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-foreground">
          <div className="bg-transparent border-b border-border px-0 py-1 min-w-[80px]">
            {priceRange[0].toLocaleString()} RSD
          </div>
          <span className="text-muted-foreground px-2">do</span>
          <div className="bg-transparent border-b border-border px-0 py-1 text-right min-w-[80px]">
            {priceRange[1].toLocaleString()} RSD
          </div>
        </div>
      </div>

      <Button className="w-full h-12 bg-foreground text-background hover:bg-accent hover:text-white mt-4 font-bold tracking-[0.2em] text-xs uppercase rounded-none transition-all duration-300">
        Ažuriraj Rezultate
      </Button>
    </div>
  );
}
