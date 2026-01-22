import Layout from "@/components/Layout";
import { useRoute } from "wouter";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { ShoppingCart, Heart, Share2, FileText, Check, Phone, Truck } from "lucide-react";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const productId = params?.id;
  const product = products.find(p => p.id === productId) || products[0]; // Fallback for demo

  return (
    <Layout>
       <div className="bg-secondary/30 border-b border-border py-6">
        <div className="container mx-auto px-4">
           <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Početna</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Proizvodi</BreadcrumbLink>
              </BreadcrumbItem>
               <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/products?category=${product.category}`}>{product.category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-white border border-border rounded-xl p-12 flex items-center justify-center relative overflow-hidden group">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
               />
               {product.isNew && (
                <Badge className="absolute top-6 left-6 bg-accent text-white border-none px-3 py-1 text-sm">NOVO</Badge>
               )}
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className={`aspect-square bg-white border ${i === 1 ? 'border-primary ring-1 ring-primary' : 'border-border'} rounded-lg p-2 cursor-pointer hover:border-primary transition-colors flex items-center justify-center`}>
                    <img src={product.image} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">{product.brand}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
               <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                     {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.9 od 5)</span>
               </div>
               <span className="text-muted-foreground">|</span>
               <span className="text-sm text-accent font-medium flex items-center gap-1">
                  <Check className="h-4 w-4" /> Na lageru
               </span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-b border-border pb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6 mb-8">
              <div>
                <span className="block text-sm text-muted-foreground font-medium mb-1">Cena sa PDV-om:</span>
                <span className={`text-4xl font-bold font-heading ${product.price ? 'text-primary' : 'text-accent'}`}>
                  {product.price 
                    ? `${product.price.toLocaleString('sr-RS')} RSD` 
                    : 'Pozovite za cenu'}
                </span>
              </div>
              
              {!product.price && (
                 <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-lg">
                    <Phone className="h-5 w-5" /> +381 11 123 4567
                 </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex items-center border border-border rounded-md">
                  <button className="px-4 py-3 hover:bg-secondary transition-colors font-bold text-lg">-</button>
                  <input type="text" value="1" className="w-12 text-center border-none focus:ring-0 font-bold" readOnly />
                  <button className="px-4 py-3 hover:bg-secondary transition-colors font-bold text-lg">+</button>
               </div>
               <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold text-lg h-auto py-3">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.price ? 'Dodaj u Korpu' : 'Zatraži Ponudu'}
               </Button>
               <Button size="icon" variant="outline" className="h-auto w-14 border-border">
                  <Heart className="h-6 w-6 text-muted-foreground" />
               </Button>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
               <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                     <Truck className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-foreground">Besplatna Isporuka</h4>
                     <p className="text-sm text-muted-foreground">Za sve porudžbine preko 50.000 RSD na teritoriji Srbije.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                     <FileText className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-foreground">Tehnička Dokumentacija</h4>
                     <p className="text-xs text-muted-foreground">Preuzmite PDF specifikacije i uputstva za montažu.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <Tabs defaultValue="specs">
            <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto rounded-none space-x-8">
              <TabsTrigger 
                value="specs" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-2 font-bold text-lg text-muted-foreground data-[state=active]:text-primary"
              >
                Tehničke Specifikacije
              </TabsTrigger>
              <TabsTrigger 
                value="docs" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-2 font-bold text-lg text-muted-foreground data-[state=active]:text-primary"
              >
                Dokumentacija
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-2 font-bold text-lg text-muted-foreground data-[state=active]:text-primary"
              >
                Komentari i Pitanja
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={key} className={`flex justify-between py-4 border-b border-border ${i % 2 === 0 ? 'bg-secondary/10' : ''}`}>
                       <span className="font-medium text-muted-foreground">{key}</span>
                       <span className="font-bold text-foreground">{value}</span>
                    </div>
                  ))}
               </div>
            </TabsContent>
            
            <TabsContent value="docs" className="pt-8">
               <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                     <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-primary/50 group-hover:text-primary transition-colors" />
                        <div>
                           <h4 className="font-bold text-foreground">Tehnički List (Datasheet)</h4>
                           <p className="text-xs text-muted-foreground">PDF • 2.4 MB</p>
                        </div>
                     </div>
                     <Button variant="ghost" size="sm">Preuzmi</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                     <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-primary/50 group-hover:text-primary transition-colors" />
                        <div>
                           <h4 className="font-bold text-foreground">Uputstvo za Montažu</h4>
                           <p className="text-xs text-muted-foreground">PDF • 1.1 MB</p>
                        </div>
                     </div>
                     <Button variant="ghost" size="sm">Preuzmi</Button>
                  </div>
               </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-8">
               <p className="text-muted-foreground italic">Trenutno nema komentara za ovaj proizvod.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
