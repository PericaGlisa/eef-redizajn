import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products, categories, brands } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import luxuryHero from "@/assets/hero-luxury.png";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            src={luxuryHero} 
            alt="Elite Engineering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.3em] text-sm uppercase">The Gold Standard in HVAC</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-white leading-[0.85] mb-8 mix-blend-difference">
              ELITE<br/>COOLING
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed mb-12 tracking-tight">
              Engineering the future of thermal dynamics. Exclusive systems for world-class infrastructure and high-performance industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/products">
                <Button className="bg-accent hover:bg-white hover:text-black text-white font-bold h-20 px-12 text-lg transition-all duration-500 rounded-none border-none group">
                  EXPLORE THE COLLECTION <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="h-20 px-12 text-lg border-white/20 text-white hover:bg-white hover:text-black bg-transparent rounded-none transition-all duration-500">
                BESPOKE SOLUTIONS
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end">
           <div className="flex gap-12">
              <div className="text-white/40">
                 <span className="block text-white font-bold text-2xl">25+</span>
                 <span className="text-[10px] uppercase tracking-widest">Years Excellence</span>
              </div>
              <div className="text-white/40">
                 <span className="block text-white font-bold text-2xl">1k+</span>
                 <span className="text-[10px] uppercase tracking-widest">Global Projects</span>
              </div>
           </div>
           <div className="hidden md:block text-white/20 text-9xl font-black select-none">EKO</div>
        </div>
      </section>

      {/* Prestige Brands */}
      <section className="bg-white py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 hover:opacity-100 transition-opacity duration-1000">
            {brands.map((brand, i) => (
              <span key={i} className="text-2xl font-black text-center tracking-tighter hover:text-accent cursor-default">{brand.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Editorial Style */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary tracking-tighter">CURATED<br/>SELECTION</h2>
              <p className="text-xl text-muted-foreground font-light">Precision-engineered components selected for exceptional durability and performance.</p>
            </div>
            <Link href="/products">
               <span className="text-primary font-bold border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all cursor-pointer">VIEW ARCHIVE</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Tech Capability */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent opacity-5 skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tighter leading-none">ENGINEERED<br/>FOR THE EXTREME.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Cpu, title: "Precision Control", desc: "Digital systems with 0.01% tolerance levels." },
                  { icon: Zap, title: "Peak Efficiency", desc: "Energy recovery systems that redefine ROI." },
                  { icon: Globe, title: "Eco Integrated", desc: "Sustainable cooling for a cleaner planet." },
                  { icon: ShieldCheck, title: "Titanium Build", desc: "Military-grade components for fail-safe ops." },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <item.icon className="h-8 w-8 text-accent" />
                    <h4 className="text-lg font-bold uppercase">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 border-[20px] border-white/5 scale-110" />
               <img src={products[0].image} alt="Technical Detail" className="w-full h-full object-contain mix-blend-lighten" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
