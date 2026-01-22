import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background Ambient Light */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.2 }}
             className="absolute inset-0 bg-accent/20 blur-[150px] rounded-full transform scale-50"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-4">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-8xl md:text-9xl font-heading font-black text-white tracking-tighter"
              >
                EKO
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
               <motion.div 
                 initial={{ y: 100 }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                 className="flex items-center gap-4"
               >
                 <span className="h-px w-12 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.5em] uppercase">ELEKTROFRIGO</span>
                <span className="h-px w-12 bg-accent" />
               </motion.div>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 flex flex-col items-end overflow-hidden">
             <motion.span 
               initial={{ y: 50 }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5, delay: 0.8 }}
               className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-2"
        >
          Inicijalizacija Sistema
        </motion.span>
             <motion.div 
               className="h-1 bg-white/10 w-48 rounded-full overflow-hidden"
               initial={{ width: 0 }}
               animate={{ width: 192 }}
               transition={{ duration: 1, delay: 0.8 }}
             >
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
