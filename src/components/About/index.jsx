import React from "react";
import style from "./style.module.scss";
import Arrow from "../arrow/arrow-bottom";

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
      <h1>ABOUT ME</h1>
      <Arrow />
    </div>
  );
};
export default About;
