import React from 'react';
import Container from "@/components/ui/Container/Container";
import ComputerCanvas from "@/component/Desktop/Desktop";
import DotGrid from '../DotGrid/DotGrid';
import TrueFocus from '../TrueFocus/TrueFocus';

function HeroSection() {
  return (
    <div className='-m-20'>
      <div className='w-[1440px] h-screen flex justify-center '>
        <div className='w-full h-screen absolute -z-10 bg-black'>
          <DotGrid
            dotSize={10}
            gap={20}
            baseColor="#0B1E23"
            activeColor="#000000"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="w-full h-full flex justify-center gap-20 px-6 text-white font-mono">
          <div className='w-full h-full flex justify-end'>
            <div className='h-full flex flex-col justify-center'>
              <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Tri Sumanzaya</h1>
              <div className='flex items-center'>
                <TrueFocus
                  sentence="Mobile Software"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#1A535C"
                  animationDuration={3}
                  pauseBetweenAnimations={1}
                />
                <div className='flex justify-center items-center ml-5'>
                  <p className="text-2xl font-extrabold">Engineer.</p>
                </div>
              </div>
              <p className="font-extrabold text-lg-500 mt-4">Practical code, Real impact.</p>
            </div>
          </div>
          <div className='w-full flex justify-center items-center h-full'>
            <div className='w-full  h-[500px] bg-white mr-10' style={{borderRadius:'19% 81% 17% 83% / 77% 15% 85% 23%'}} >
              <ComputerCanvas />
            </div>
          </div>
        </div>
      </div>

        <div className='w-[1440px] h-screen flex justify-center bg-orange-400'></div>
    </div>
  );
};

export default HeroSection;