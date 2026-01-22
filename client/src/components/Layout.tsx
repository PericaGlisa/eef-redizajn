import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, Phone, Mail, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar - Industrial/B2B Feel */}
      <div className="bg-primary text-primary-foreground py-2 text-xs font-medium tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> +381 11 123 4567
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <Mail className="h-3 w-3" /> info@ekoelektrofrigo.rs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-accent cursor-pointer transition-colors">Podrška</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Katalog</span>
            <span className="hover:text-accent cursor-pointer transition-colors">B2B Login</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-sm group-hover:bg-accent transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-tight text-primary">EKO</span>
                <span className="text-[0.65rem] font-bold text-muted-foreground tracking-widest uppercase">Elektrofrigo</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
             <Link href="/">
               <Button variant={location === '/' ? 'secondary' : 'ghost'} className="font-medium text-sm">Početna</Button>
             </Link>
             <Link href="/products">
               <Button variant={location === '/products' ? 'secondary' : 'ghost'} className="font-medium text-sm flex items-center gap-1">
                 Proizvodi <ChevronDown className="h-3 w-3 opacity-50" />
               </Button>
             </Link>
             <Button variant="ghost" className="font-medium text-sm">Brendovi</Button>
             <Button variant="ghost" className="font-medium text-sm">Akcije</Button>
             <Button variant="ghost" className="font-medium text-sm">O Nama</Button>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-64">
              <Input 
                type="search" 
                placeholder="Pretraga proizvoda..." 
                className="pl-4 pr-10 bg-secondary/50 border-transparent focus:bg-white focus:border-accent transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <Button variant="ghost" size="icon" className="hidden sm:flex relative hover:text-accent transition-colors">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:text-accent transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-accent text-white border-2 border-white">2</Badge>
            </Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    <Input type="search" placeholder="Pretraga..." />
                    <nav className="flex flex-col gap-2">
                      <Link href="/"><Button variant="ghost" className="w-full justify-start text-lg">Početna</Button></Link>
                      <Link href="/products"><Button variant="ghost" className="w-full justify-start text-lg">Proizvodi</Button></Link>
                      <Button variant="ghost" className="w-full justify-start text-lg">Brendovi</Button>
                      <Button variant="ghost" className="w-full justify-start text-lg">Akcije</Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="bg-white/10 p-2 rounded-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                  </svg>
                 </div>
                 <span className="font-heading font-bold text-2xl">EKO</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Vodeći distributer rashladne i klimatizacione opreme u regionu. 
                Pružamo kompletna rešenja za industriju i komercijalne objekte.
              </p>
              <div className="flex gap-4">
                 {/* Social Icons Placeholder */}
                 <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer flex items-center justify-center">L</div>
                 <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer flex items-center justify-center">F</div>
                 <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer flex items-center justify-center">I</div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Informacije</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">O nama</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karijera</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politika privatnosti</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Korisnička Podrška</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Način plaćanja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dostava</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reklamacije</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Česta pitanja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Servisna mreža</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Kontakt</h3>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-4 h-4 rounded-full border border-white/20"></div>
                  <span>Bulevar Oslobođenja 123,<br/>11000 Beograd, Srbija</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span>+381 11 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span>prodaja@ekoelektrofrigo.rs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>&copy; 2026 Eko Elektrofrigo d.o.o. Sva prava zadržana.</p>
            <div className="flex gap-4">
               <span>Made by Replit Design</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
