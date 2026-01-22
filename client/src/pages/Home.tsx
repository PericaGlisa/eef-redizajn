import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products, categories, brands } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import heroImg from "@/assets/hero-banner.png";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, PhoneCall } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Industrial Warehouse" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 space-y-6 animate-in slide-in-from-left-4 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-accent/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Lider u industriji od 1995.
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1]">
              Profesionalna <span className="text-accent">Rashladna</span> <br/>
              Tehnika & Oprema
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Kompletna rešenja za industrijsko hlađenje, klimatizaciju i ventilaciju. 
              Zvanični distributeri za Ziehl-Abegg, Danfoss i Copeland.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
                  Istraži Proizvode
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white bg-transparent">
                Kontaktirajte Nas
              </Button>
            </div>
          </div>
          
          {/* Hero Decorative Elements (Abstract UI) */}
          <div className="hidden md:block md:w-2/5 relative">
             <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl animate-in slide-in-from-right-8 duration-1000 delay-100 transform rotate-2">
                <div className="flex justify-between items-center mb-6">
                   <div className="h-3 w-24 bg-white/20 rounded-full"></div>
                   <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-3 bg-black/20 rounded-lg">
                      <div className="w-12 h-12 bg-white/10 rounded-md"></div>
                      <div className="space-y-2">
                         <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                         <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-3 bg-black/20 rounded-lg opacity-80">
                      <div className="w-12 h-12 bg-white/10 rounded-md"></div>
                      <div className="space-y-2">
                         <div className="h-3 w-28 bg-white/20 rounded-full"></div>
                         <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white border-b border-border py-12">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: CheckCircle2, title: "Originalni Delovi", desc: "100% garancija kvaliteta" },
                { icon: Truck, title: "Brza Isporuka", desc: "Dostava za 24h" },
                { icon: ShieldCheck, title: "Stručna Podrška", desc: "Inženjerski tim" },
                { icon: PhoneCall, title: "Servis 24/7", desc: "Mreža servisera" },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary/5 p-3 rounded-full text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Kategorije Proizvoda</h2>
            <p className="text-muted-foreground">Pronađite sve što vam je potrebno za vaš rashladni sistem na jednom mestu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link key={cat.id} href={`/products?category=${cat.id}`}>
                <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 text-center cursor-pointer group h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     {/* Dynamic Icon Placeholder based on index/type */}
                     <span className="font-heading font-bold text-xl">{cat.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cat.count} artikala</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-primary">Izdvajamo iz Ponude</h2>
              <p className="text-muted-foreground">Najtraženiji proizvodi ovog meseca.</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="hidden md:flex gap-2 group">
                Pogledaj Sve <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link href="/products">
              <Button className="w-full">Pogledaj Sve</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-16 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <h3 className="text-center text-primary-foreground/50 font-heading font-bold uppercase tracking-widest mb-10 text-sm">Zvanični Distributeri Za</h3>
           <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {brands.map((brand, i) => (
                <span key={i} className="text-2xl md:text-3xl font-heading font-bold hover:text-white transition-colors cursor-default select-none">{brand}</span>
              ))}
           </div>
        </div>
      </section>
    </Layout>
  );
}
