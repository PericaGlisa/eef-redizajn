import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, Phone, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent selection:text-white">
      {/* Global Status Bar */}
      <div className="bg-black text-white py-3 text-[10px] font-black uppercase tracking-[0.3em]">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">BELGRADE // HQ</span>
            <span className="hidden md:flex items-center gap-2 opacity-40">MUNICH // DESIGN CENTER</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-accent cursor-pointer transition-colors">Client Portal</span>
            <span className="hover:text-accent cursor-pointer transition-colors flex items-center gap-1"><Globe className="h-3 w-3" /> EN</span>
          </div>
        </div>
      </div>

      {/* Luxury Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/80 backdrop-blur-2xl">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          {/* Menu Button Left */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
             <Link href="/products">
               <span className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent">Systems</span>
             </Link>
             <span className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent">Engineering</span>
             <span className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-accent">Intelligence</span>
          </div>

          {/* Logo Center */}
          <Link href="/">
            <a className="flex flex-col items-center group flex-1">
              <span className="font-heading font-black text-4xl leading-none tracking-[-0.05em] text-primary group-hover:text-accent transition-colors">EKO</span>
              <span className="text-[8px] font-black text-muted-foreground tracking-[0.5em] uppercase -mt-0.5">ELITE ENGINEERING</span>
            </a>
          </Link>

          {/* Actions Right */}
          <div className="flex items-center justify-end gap-10 flex-1">
            <div className="hidden xl:flex items-center gap-2 text-primary font-black text-[11px] tracking-widest cursor-pointer group">
              <Search className="h-4 w-4 group-hover:text-accent" />
              <span className="group-hover:text-accent">FIND COMPONENTS</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative group cursor-pointer">
                <ShoppingCart className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full">02</span>
              </div>
              
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-transparent">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full bg-black border-none text-white">
                    <nav className="flex flex-col gap-12 mt-24">
                      <Link href="/"><span className="text-4xl font-black uppercase tracking-tighter">Home</span></Link>
                      <Link href="/products"><span className="text-4xl font-black uppercase tracking-tighter">Systems</span></Link>
                      <span className="text-4xl font-black uppercase tracking-tighter opacity-30">Engineering</span>
                      <span className="text-4xl font-black uppercase tracking-tighter opacity-30">Archive</span>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>

      {/* Brutalist Footer */}
      <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-32">
            <div>
              <h3 className="text-7xl md:text-9xl font-black tracking-tighter mb-12">CONTACT<br/>FORCE.</h3>
              <p className="text-white/40 text-xl font-light max-w-md leading-relaxed">
                Elite support for high-stakes environments. Our engineering task force is available for global deployment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16">
               <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Headquarters</h4>
                  <p className="text-sm font-light leading-loose text-white/60">
                    Bulevar Oslobođenja 123<br/>
                    11000 Belgrade, Serbia<br/>
                    +381 11 123 4567
                  </p>
               </div>
               <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Inquiries</h4>
                  <p className="text-sm font-light leading-loose text-white/60">
                    General: info@eko-elite.com<br/>
                    Support: service@eko-elite.com<br/>
                    B2B Portal: login.eko-elite.com
                  </p>
               </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">© 2026 EKO ELITE ENGINEERING // ALL RIGHTS RESERVED.</span>
            <div className="flex gap-12 text-[10px] font-black tracking-[0.3em] text-white/40">
               <span className="hover:text-white cursor-pointer">PRIVACY</span>
               <span className="hover:text-white cursor-pointer">TERMS</span>
               <span className="hover:text-white cursor-pointer">GLOBAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
