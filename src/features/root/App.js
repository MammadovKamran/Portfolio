import React from "react";
import Dashboard from "./Dashboard";
import Navigation from "../components/navigation/Navigation";
import AnimatedCursor from "react-animated-cursor";
import ParticlesBg from "particles-bg";
import Bg_wave from "../components/Bg_wave";
const App = () => {
  return (
    <div className="appContainer">
      <Navigation  />
      <Bg_wave />
      <Dashboard  />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="51,92,46"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2.5}
        outerStyle={{
          border: "1px solid #335C2E",
        }}
        innerStyle={{
          backgroundColor: "#335C2E",
          PointerEvent: "",
        }}
        clickables={["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"]}
      />
      {/* <ParticlesBg
        // config={config}
        bg={true}
        num={80}
        type="thick"
       
      /> */}
    </div>
  );
};

export default App;
