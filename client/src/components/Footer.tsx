import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 md:pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full" />
         <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 mb-16 md:mb-32">
          <div>
            <h3 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 md:mb-12 leading-[0.8]">
              KONTAKT<br/><span className="text-accent">CENTAR.</span>
            </h3>
            <p className="text-white/40 text-xl font-light max-w-md leading-relaxed mb-12">
              Elitna podrška za zahtevna okruženja. Naš inženjerski tim je dostupan za globalne projekte.
            </p>
            
            <div className="flex items-center gap-4 max-w-md border-b border-white/20 pb-4 group focus-within:border-accent transition-colors">
              <input 
                type="email" 
                placeholder="UNESITE EMAIL ZA NOVOSTI" 
                className="bg-transparent border-none outline-none text-sm font-mono tracking-widest w-full text-white placeholder:text-white/20"
              />
              <button className="text-accent hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Sedište</h4>
                <p className="text-sm font-light leading-loose text-white/60">
                  Svetolika Nikačevića 11<br/>
                  Beograd, Srbija<br/>
                  <a href="tel:+381113757287" className="hover:text-white transition-colors block">+381 11 375 72 87</a>
                  <a href="tel:+381113757288" className="hover:text-white transition-colors block">+381 11 375 72 88</a>
                </p>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Upiti</h4>
                <div className="text-sm font-light leading-loose text-white/60">
                  <a href="mailto:office@eef.rs" className="hover:text-white transition-colors block"><span className="text-white/40 mr-2">OFFICE:</span> office@eef.rs</a>
                  <a href="mailto:prodaja@eef.rs" className="hover:text-white transition-colors block"><span className="text-white/40 mr-2">PRODAJA:</span> prodaja@eef.rs</a>
                  <a href="mailto:tehnika@eef.rs" className="hover:text-white transition-colors block"><span className="text-white/40 mr-2">INŽENJERING:</span> tehnika@eef.rs</a>
                  <a href="mailto:servis@eef.rs" className="hover:text-white transition-colors block"><span className="text-white/40 mr-2">SERVIS:</span> servis@eef.rs</a>
                </div>
             </div>
             <div className="col-span-2 space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Društvene Mreže</h4>
                <div className="flex gap-8">
                  {['LinkedIn'].map((social) => (
                    <a key={social} href="#" className="text-sm font-light text-white/60 hover:text-accent transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
             </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <span className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">© 2026 EKO ELEKTROFRIGO // SVA PRAVA ZADRŽANA.</span>
          <div className="flex gap-12 text-[10px] font-black tracking-[0.3em] text-white/40">
             <Link href="/privacy"><span className="hover:text-white cursor-pointer">PRIVATNOST</span></Link>
             <Link href="/terms"><span className="hover:text-white cursor-pointer">USLOVI</span></Link>
             <Link href="/global"><span className="hover:text-white cursor-pointer">GLOBALNO</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
