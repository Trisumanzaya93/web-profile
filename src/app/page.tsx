"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Footer from '@/component/Footer/Footer'
import ComputerCanvas from "@/component/Desktop/Desktop";
import { EvervaultCard } from "@/components/ui/evervault-card";


export default function Home() {
return (
  <div className="w-[100vw] h-[100vh] flex justify-center items-end">
    {/* <div className="flex absolute justify-center items-center z-10">
      <ComputerCanvas/>
    </div> */}
      {/* <EvervaultCard text="test"/> */}
        <HeroSection/>
      <Footer/>
  </div>
);
}
