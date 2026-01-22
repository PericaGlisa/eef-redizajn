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
import { SlidersHorizontal } from "lucide-react";

export default function ProductList() {
  return (
    <Layout>
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-8">
           <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Početna</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Proizvodi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-heading font-bold text-primary">Svi Proizvodi</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-lg border border-border shadow-sm">
              <p className="text-sm text-muted-foreground">Prikazano <span className="font-bold text-foreground">1-6</span> od <span className="font-bold text-foreground">124</span> proizvoda</p>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter */}
                <div className="lg:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <SlidersHorizontal className="h-4 w-4" /> Filteri
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <div className="mt-8">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground hidden sm:inline">Sortiraj:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sortiranje" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Najpopularnije</SelectItem>
                      <SelectItem value="price-asc">Cena: Rastuća</SelectItem>
                      <SelectItem value="price-desc">Cena: Opadajuća</SelectItem>
                      <SelectItem value="newest">Najnovije</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {/* Duplicate for demo to fill grid */}
              {products.map((product) => (
                <ProductCard key={`dup-${product.id}`} product={product} />
              ))}
            </div>

             {/* Pagination Demo */}
             <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline" disabled>Prethodna</Button>
                <Button variant="default" className="bg-primary">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <span className="flex items-center px-2 text-muted-foreground">...</span>
                <Button variant="outline">12</Button>
                <Button variant="outline">Sledeća</Button>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
