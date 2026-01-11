import { Suspense, useEffect, useState, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
    const computer = useGLTF('/computer/scene.gltf');
  return (
    <mesh>
        <hemisphereLight intensity={1} groundColor={'black'}/>
        <pointLight intensity={10}/>
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
          scale={0.60}
          position={[0,-0.75,-0.75]}
          rotation={[-0.01,-0.2,-0.1]}
        />
    </mesh>
  );
};

const ComputerCanvas = () => {
return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[20,3,5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense>
        {/* <Environment preset="night"/> */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
)
};

export default ComputerCanvas;