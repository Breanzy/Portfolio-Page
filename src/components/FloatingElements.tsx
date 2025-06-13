
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const { scale } = useSpring({
    scale: [1, 1.2, 1],
    config: { duration: 2000 },
    loop: true,
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <animated.mesh position={position} scale={scale}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#1e40af" transparent opacity={0.3} />
        </Sphere>
      </animated.mesh>
    </Float>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const { rotation } = useSpring({
    rotation: [0, Math.PI * 2, 0],
    config: { duration: 4000 },
    loop: true,
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <animated.mesh position={position} rotation={rotation}>
        <Box args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.2} />
        </Box>
      </animated.mesh>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere position={[-3, 2, 0]} />
        <AnimatedSphere position={[3, -2, 0]} />
        <AnimatedBox position={[2, 3, -1]} />
        <AnimatedBox position={[-2, -3, -1]} />
        <AnimatedSphere position={[0, 0, -2]} />
      </Canvas>
    </div>
  );
};

export default FloatingElements;
