"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Modal from "@/components/ui/modal";


export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  const scrollReff = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

  const width = window.innerWidth;
    if (width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="h-full overflow-scroll scroll-h scrollbar-hide" ref={scrollReff}>
        <Modal open={isMobile} />
        {!isMobile && <HeroSection scrollReff={scrollReff} displayDock={!isMobile} />}
    </div>
  );
}
