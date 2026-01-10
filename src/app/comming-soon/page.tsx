'use client';

import LightPillar from '@/components/LightPillar';
import FuzzyText from '@/components/FuzzyText';
import { useRouter } from 'next/navigation';

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">

      {/* Background Pillar */}
      <LightPillar
        topColor="#1A535C"
        bottomColor="#1A535C"
        intensity={1.1}
        rotationSpeed={0.6}
        glowAmount={0.008}
        pillarWidth={6.5}
        pillarHeight={0.35}
        noiseIntensity={0.8}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute flex flex-col items-center justify-center text-center px-4">

        <FuzzyText fontSize={'6rem'} baseIntensity={0.08}>
          Coming Soon
        </FuzzyText>

        <p className="text-white/80 mt-3 text-lg max-w-lg">
          We’re crafting something awesome. Stay tuned for updates!
        </p>

        <button
          onClick={() => router.push('/')}
          className="text-black font-semibold text-xl bg-white px-10 py-3 rounded-xl mt-8 hover:bg-white/90 transition"
        >
          Back to Home
        </button>
      </div>

      {/* Soft Glow Circles */}
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10 pointer-events-none"></div>
      <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full bottom-0 right-0 pointer-events-none"></div>
    </div>
  );
}
