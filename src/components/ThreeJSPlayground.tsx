import { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import { TextureLoader } from "three";

const imageUrl = (i: number, j: number) =>
  `https://example.com/my-image-${i}-${j}.jpg`;

const Square = ({
  position,
  i,
  j,
}: {
  position: [number, number, number];
  i: number;
  j: number;
}) => {
  const [hovered, setHover] = useState(false);
  const texture = useMemo(
    () => new TextureLoader().load(imageUrl(i, j)),
    [i, j]
  );

  const vertices = useMemo(() => {
    return [
      new Vector3(-0.5, -0.5, 0),
      new Vector3(0.5, -0.5, 0),
      new Vector3(0.5, 0.5, 0),
      new Vector3(-0.5, 0.5, 0),
      new Vector3(-0.5, -0.5, 0),
    ];
  }, []);

  return (
    <group position={position}>
      <Line
        points={vertices}
        color='white'
        lineWidth={2} // In units of pixels
      />
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxGeometry args={[1, 1, 0.001]} />
        <meshBasicMaterial
          map={hovered ? texture : undefined}
          color={hovered ? "grey" : "transparent"}
        />
      </mesh>
    </group>
  );
};

const ThreeJSPlayground = () => {
  const gridSize = 10;

  return (
    <>
      <color attach='background' args={["#000000"]} />
      <ambientLight intensity={1} />

      <Html fullscreen>
        <div
          style={{
            width: "100%",
            padding: "100px",
            fontFamily: "Anton",
            fontSize: "128px",
            letterSpacing: "25px",
            lineHeight: "128px",
            textTransform: "uppercase",
            color: "white",
          }}>
          <p>{"Frontend"}</p>
          <p>{"Developer"}</p>
          <p
            style={{
              fontFamily: "Antonio",
              fontSize: "32px",
              letterSpacing: "19.5px",
              lineHeight: "32px",
              textTransform: "uppercase",
              color: "white",
              transform: "translateX(3px)",
            }}>
            {"Olaf Nieliwodzki"}
          </p>
        </div>
      </Html>

      {Array.from({ length: gridSize }).map((_, i) =>
        Array.from({ length: gridSize }).map((__, j) => (
          <Square
            key={`square-${i}-${j}`}
            position={[i - gridSize / 2, j - gridSize / 2, 0]}
            i={i}
            j={j}
          />
        ))
      )}
    </>
  );
};

export default ThreeJSPlayground;
