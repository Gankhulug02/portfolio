import React from "react";
import style from "./style.module.scss";
import Arrow from "../arrow/arrow-bottom";
import Middle from "./middle";
import Bottom from "./bottom";

const About = () => {
  return (
    <div id="about" className={style.container}>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        src="https://www.vecteezy.com/video/7622658-abstract-multicolored-glowing-festive-background"
      ></video> */}
      <div className={style.top}>
        <h1>ABOUT ME</h1>
        <p>
          Know <span>Me</span> More
        </p>
      </div>
      <Middle />
      <Bottom />
      <Arrow />
    </div>
  );
};
export default About;
