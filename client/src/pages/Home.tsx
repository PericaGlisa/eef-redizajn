import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products, categories, brands } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-building.png";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Layout>
      <div className="bg-noise" />
      
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-black overflow-hidden perspective-1000 pb-32">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src={heroImage} 
            alt="EKO Elektrofrigo Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/20 to-black/40" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-48">
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <motion.div 
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px w-16 bg-accent" 
              />
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-accent font-bold tracking-[0.4em] text-xs uppercase"
              >
                Elitni Standard u KGH
              </motion.span>
            </div>

            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-heading font-black text-white leading-[0.9] md:leading-[0.8] mb-10 mix-blend-difference tracking-tighter">
              <TextReveal text="ELITNO" delay={0.2} /><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                 <TextReveal text="HLAĐENJE" delay={0.5} />
              </span>
            </div>

            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-16 tracking-tight border-l-2 border-accent/50 pl-6">
              Inženjering budućnosti termodinamike. Ekskluzivni sistemi za infrastrukturu svetske klase i industriju visokih performansi.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/products">
                <MagneticButton strength={0.2}>
                  <Button className="bg-accent hover:bg-white hover:text-black text-white font-bold h-24 px-14 text-xl transition-all duration-500 rounded-none border-none group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      ISTRAŽI KOLEKCIJU <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                  </Button>
                </MagneticButton>
              </Link>
              <MagneticButton strength={0.2}>
                <Button variant="outline" className="h-24 px-14 text-xl border-white/20 text-white hover:bg-white hover:text-black bg-transparent rounded-none transition-all duration-500">
                  NAMENSKA REŠENJA
                </Button>
              </MagneticButton>
            </div>

            <div className="flex gap-16 mt-20 border-t border-white/10 pt-10">
               <div className="text-white/40 group cursor-default">
                  <span className="block text-white font-bold text-3xl group-hover:text-accent transition-colors">25+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] mt-1 block">Godina Izvrsnosti</span>
               </div>
               <div className="text-white/40 group cursor-default">
                  <span className="block text-white font-bold text-3xl group-hover:text-accent transition-colors">1k+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] mt-1 block">Globalnih Projekata</span>
               </div>
            </div>
          </motion.div>
          
           <div className="hidden md:block text-white/10 text-[12rem] leading-none font-black select-none absolute bottom-0 right-0 z-0 pointer-events-none translate-y-1/3">
             EKO
           </div>
        </div>
      </section>

      {/* Prestige Brands - Marquee */}
      <section className="bg-white py-24 border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-24 items-center opacity-40"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter hover:text-accent transition-colors cursor-default select-none">
                {brand.toUpperCase()}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products - Editorial Style */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary tracking-tighter">ODABRANA<br/>SELEKCIJA</h2>
              <p className="text-xl text-muted-foreground font-light">Precizno izrađene komponente odabrane za izuzetnu izdržljivost i performanse.</p>
            </div>
            <Link href="/products">
               <span className="text-primary font-bold border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all cursor-pointer">POGLEDAJ ARHIVU</span>
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
      <section className="py-16 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent opacity-5 skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 md:mb-12 tracking-tighter leading-none">PROJEKTOVANO<br/>ZA EKSTREME.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Cpu, title: "Precizna Kontrola", desc: "Digitalni sistemi sa 0.01% nivoom tolerancije." },
                  { icon: Zap, title: "Vrhunska Efikasnost", desc: "Sistemi za povrat energije koji redefinišu povraćaj investicije." },
                  { icon: Globe, title: "Eko Integracija", desc: "Održivo hlađenje za čistiju planetu." },
                  { icon: ShieldCheck, title: "Titanijumska Izrada", desc: "Vojne komponente za bezbedan rad." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 p-6 border border-white/10 hover:border-accent/50 transition-colors cursor-default"
                  >
                    <item.icon className="h-8 w-8 text-accent" />
                    <h4 className="text-lg font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
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
