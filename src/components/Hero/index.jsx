import React from "react";
import style from "../Hero/style.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { motion, MotionConfig } from "framer-motion";
import Particles from "react-particles";
import ParticlesConfig from "../particle/particles-config";
import Arrow from "../arrow/arrow-bottom";

const Hero = () => {
  return (
    <div id="home" className={style.container}>
      <ParticlesConfig></ParticlesConfig>
      <div className={style.left}>
        <div className="d-flex flex-wrap fs-7">
          <h1>I enjoy&nbsp;</h1>
          <h1 className="text-primary">
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={85}
              deleteSpeed={100}
              delaySpeed={1000}
              words={["designing", "tech", "websites", "digital products"]}
            />
          </h1>
        </div>
        <p>
          8+ years of experience in Webflow development. My mission is to design
          and develop a website that you and your audience love.
        </p>
        <button>Get in touch</button>
      </div>
      <div className={style.right}>
        <img src="./images/zurag.png" alt="" />
      </div>
      <Arrow />
    </div>
  );
};

export default Hero;

{
  /* <div id="home" className={style.container}>
  <div className={style.left}>
    <div className="d-flex fs-7">
      <h1>I enjoy&nbsp;</h1>
      <h1 className="text-success">
        <Typewriter
          words={["designing", "tech", "websites", "digital products"]}
        />
      </h1>
    </div>
    <p>
      8+ years of experience in Webflow development. My mission is to design and
      develop a website that you and your audience love.
    </p>
    <button>Get in touch</button>
  </div>
  <div className={style.right}>
    <img
      src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      alt=""
    />
  </div>
</div>; */
}
