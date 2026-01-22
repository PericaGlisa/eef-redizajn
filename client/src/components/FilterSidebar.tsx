import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { categories, brands } from "@/lib/data";

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 100000]);

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Kategorije</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center space-x-2 group cursor-pointer">
              <Checkbox id={`cat-${cat.id}`} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label 
                htmlFor={`cat-${cat.id}`} 
                className="text-sm text-muted-foreground group-hover:text-primary transition-colors cursor-pointer flex-1 flex justify-between"
              >
                <span>{cat.name}</span>
                <span className="text-xs opacity-50">({cat.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Brands */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Brendovi</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2 group cursor-pointer">
              <Checkbox id={`brand-${brand}`} />
              <Label htmlFor={`brand-${brand}`} className="text-sm text-muted-foreground group-hover:text-primary transition-colors cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Price Range */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Cena (RSD)</h3>
        <div className="px-1 mb-6">
          <Slider 
            defaultValue={[0, 100000]} 
            max={200000} 
            step={1000}
            onValueChange={setPriceRange}
            className="py-4"
          />
        </div>
        <div className="flex items-center justify-between text-sm font-medium text-foreground">
          <div className="bg-secondary px-3 py-1 rounded-sm border border-border">
            {priceRange[0].toLocaleString()}
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="bg-secondary px-3 py-1 rounded-sm border border-border">
            {priceRange[1].toLocaleString()}
          </div>
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4 font-bold tracking-wide">
        PRIMENI FILTERE
      </Button>
    </div>
  );
}
