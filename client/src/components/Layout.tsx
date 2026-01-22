import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, Phone, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "@/context/SmoothScrollContext";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Footer from "./Footer";
import Preloader from "./ui/Preloader";
import logo from "@/assets/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  const { stop, start } = useSmoothScroll();

  useEffect(() => {
    start();
  }, [location, start]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    lastScrollY.current = latest;
  });

  const isHomePage = location === "/";
  const isDarkText = !isHomePage || isScrolled;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent selection:text-white">
      <Preloader />
      {/* Global Status Bar */}
      <div className="bg-primary text-white py-3 text-[10px] font-black uppercase tracking-[0.3em] z-[60] relative">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">BEOGRAD // SEDIŠTE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-accent cursor-pointer transition-colors">Klijent Portal</span>
            <span className="hover:text-accent cursor-pointer transition-colors flex items-center gap-1"><Globe className="h-3 w-3" /> RS</span>
          </div>
        </div>
      </div>

      {/* Luxury Navigation */}
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 right-0 z-50 border-b transition-all duration-300 ${
          isScrolled 
            ? "top-0 bg-white/90 backdrop-blur-xl border-border/50 py-4 shadow-sm" 
            : `top-[40px] bg-transparent ${isHomePage ? "border-white/10" : "border-black/5"} py-6`
        }`}
      >
        <div className="container mx-auto px-6 min-h-[5rem] flex items-center justify-between">
          {/* Menu Button Left */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
             <Link href="/products" className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent ${isDarkText ? "text-primary" : "text-white"}`}>
               Sistemi
             </Link>
             <span className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent ${isDarkText ? "text-primary" : "text-white"}`}>Inženjering</span>
             <span className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent ${isDarkText ? "text-primary" : "text-white"}`}>Informacije</span>
          </div>

          {/* Logo Center */}
          <Link href="/" className="flex flex-col items-center group flex-1">
            <img 
              src={logo} 
              alt="Elektrofrigo" 
              className={`h-20 w-auto object-contain transition-all duration-300 drop-shadow-md ${!isDarkText ? "brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""}`} 
            />
          </Link>

          {/* Actions Right */}
          <div className="flex items-center justify-end gap-10 flex-1">
            <div className={`hidden xl:flex items-center gap-2 font-black text-[11px] tracking-widest cursor-pointer group ${isDarkText ? "text-primary" : "text-white"}`}>
              <Search className="h-4 w-4 group-hover:text-accent" />
              <span className="group-hover:text-accent">PRONAĐI KOMPONENTE</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative group cursor-pointer">
                <ShoppingCart className={`h-5 w-5 group-hover:text-accent transition-colors ${isDarkText ? "text-primary" : "text-white"}`} />
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full">02</span>
              </div>
              
              <div className="lg:hidden">
                <Sheet onOpenChange={(open) => open ? stop() : start()}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-transparent">
                      <Menu className={`h-6 w-6 ${isDarkText ? "text-primary" : "text-white"}`} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full bg-primary border-none text-white z-[70]">
                    <nav className="flex flex-col gap-12 mt-24">
                      <Link href="/"><span className="text-4xl font-black uppercase tracking-tighter">Početna</span></Link>
                      <Link href="/products"><span className="text-4xl font-black uppercase tracking-tighter">Sistemi</span></Link>
                      <span className="text-4xl font-black uppercase tracking-tighter opacity-30">Inženjering</span>
                      <span className="text-4xl font-black uppercase tracking-tighter opacity-30">Arhiva</span>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {location !== "/" && <div className="h-40" />}
        {children}
      </main>

      <Footer />
    </div>
  );
}
