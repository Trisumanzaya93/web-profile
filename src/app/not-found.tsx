'use client'


import { useRouter } from 'next/navigation';

import LightPillar from '../components/LightPillar';
import FuzzyText from '@/components/FuzzyText';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen justify-center overflow-hidden">
      <LightPillar
        topColor="#1A535C"
        bottomColor="#1A535C"
        intensity={1.0}
        rotationSpeed={1.0}
        glowAmount={0.005}
        pillarWidth={7.0}
        pillarHeight={0.4}
        noiseIntensity={1.0}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />
      <div className='w-full h-full flex flex-col justify-center items-center absolute'>
      <FuzzyText 
      fontSize={'7rem'}
  baseIntensity={0.1} 
  // hoverIntensity={hoverIntensity} 
  // enableHover={enableHover}
>
  404 Page Not Found
</FuzzyText>
<button onClick={()=> router.push('/')} className='text-black font-bold text-2xl bg-white px-10 rounded-xl py-3 mt-10'>
  Back To Home Page
</button>

      </div>
    </div>
  );
}
