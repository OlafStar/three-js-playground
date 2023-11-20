import { Html, Scroll, ScrollControls } from "@react-three/drei";

const ScrollThreeJSPlayground = () => {
  return (
    <>
      <color attach='background' args={["#ff0000"]} />
      <ScrollControls pages={2} damping={0.25}>
        <Scroll></Scroll>
        <Scroll>
          <Html>
            <div
              id='main-text'
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
              }}>
              {"Explore"}
            </div>
            <div
              id='main-text'
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
                top: "100vh",
              }}>
              {"Future"}
            </div>
          </Html>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollThreeJSPlayground;
