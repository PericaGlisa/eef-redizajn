import { useEffect } from "react";
import { useLocation } from "wouter";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

export function ScrollToTop() {
  const [pathname] = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}
