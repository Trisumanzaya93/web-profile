"use client"

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Footer from '@/component/Footer/Footer'
import ComputerCanvas from "@/component/Desktop/Desktop";
import { EvervaultCard } from "@/components/ui/evervault-card";


export default function Home() {

  const scrollReff = useRef();

  return (
    <div className="h-full overflow-y-scroll" ref={scrollReff}>
       {/* <div className={`w-full flex flex-col justify-center items-center pb-24`}> */}

        {/* <Footer /> */}
        <HeroSection scrollReff={scrollReff}/>
       {/* </div> */}
    </div>
  );
}
