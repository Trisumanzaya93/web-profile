'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';

type ComputerCanvasProps = {
  className?: string;
};

const Computers = () => {
  const computer = useGLTF('/computer/scene.gltf');
  const groupRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = -0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.92}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.6}
        position={[0, -0.75, -0.75]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputerCanvas = ({ className }: ComputerCanvasProps) => {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      className={className}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Suspense>
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;