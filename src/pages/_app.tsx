import "@/styles/globals.css";
import { Canvas } from "@react-three/fiber";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Canvas>
        <Component {...pageProps} />
      </Canvas>
  );
}
