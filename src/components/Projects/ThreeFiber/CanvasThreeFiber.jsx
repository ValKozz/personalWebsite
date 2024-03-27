import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

export default function CanvasThreeFiber() {
  return (
    <Canvas>
      {/* <color attach="background" args={["#31363f"]} /> */}
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 9]} />
      <Cube />
    </Canvas>
  );
}
