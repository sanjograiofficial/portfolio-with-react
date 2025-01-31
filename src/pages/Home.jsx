import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="home">
      <h1>Hello, I'm Sanjog Rai.</h1>
      <h1>
        I'm a{" "}
        <span className="typewriter">
            <Typewriter 
              words={["Developer.", "Designer.", "Learner."]}
              loop={Infinity}
              cursor
              cursorStyle="<"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorColor="red"
            />
        </span>
      </h1>
    </div>
  );
}

export default Home;
