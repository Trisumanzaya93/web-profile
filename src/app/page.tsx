"use client"
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Footer from '@/component/Footer/Footer'
import ComputerCanvas from "@/component/Desktop/Desktop";
import { EvervaultCard } from "@/components/ui/evervault-card";


export default function Home() {

  return (
    // <div>
      <div className={`w-full flex flex-col justify-center items-center relative pb-24`}>

        <Footer />
        <HeroSection />
      </div>
    // </div>
  );
}
