import { useRef } from "react";
import { BoxGeometry, EdgesGeometry, LineBasicMaterial, Color } from "three";
import { useFrame } from "@react-three/fiber";

function getGeometry(scale, color) {
  const boxBase = new BoxGeometry(scale, scale, scale);

  const edgeBase = new EdgesGeometry(boxBase);

  const material = new LineBasicMaterial({
    color: new Color(color),
    linewidth: 20,
  });

  const args = [edgeBase, material];
  return args;
}

export default function Cube() {
  const cubeRef_in = useRef();
  const cubeRef_out = useRef();
  // Animate
  useFrame(() => {
    cubeRef_in.current.rotation.y += 0.01;
    cubeRef_in.current.rotation.x += 0.01;
    cubeRef_out.current.rotation.y -= 0.01;
    cubeRef_out.current.rotation.x -= 0.01;
  });

  let wireframe_args_in = getGeometry(1.5, "red");
  let wireframe_args_out = getGeometry(2.5, "blue");
  console.log(wireframe_args_in);

  return (
    <>
      <mesh>
        <lineSegments ref={cubeRef_in} args={wireframe_args_in} />
      </mesh>
      <mesh>
        <lineSegments ref={cubeRef_out} args={wireframe_args_out} />
      </mesh>
    </>
  );
}
