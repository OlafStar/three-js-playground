import { Statue } from "@/models/Statue";
import {
  AccumulativeShadows,
  Backdrop,
  Bounds,
  CameraShake,
  Caustics,
  Cloud,
  Lightformer,
  Resize,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { PointLight } from "three";
import { PointLightHelper } from "three";

const HeroSection = () => {
  const { mouse, scene } = useThree();

  const light1 = useRef<PointLight>(null);

  useFrame(() => {
    if (light1.current) {
      light1.current.castShadow = true;
      light1.current.position.set(-mouse.x * 5, mouse.y * 2, -3);

      // const helper = new PointLightHelper(light1.current, 1, "white");
      // scene.add(helper);
    }
  });
  return (
    <>
      <color attach='background' args={["#000000"]} />
      <ambientLight intensity={0.03} />
      <Statue scale={3} position={[6, -2, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Statue scale={3} position={[-6, -2, 0]} rotation={[0, Math.PI / 2, 0]} />
      <pointLight ref={light1} color='white' intensity={0.5} />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      
    </>
  );
};

export default HeroSection;
