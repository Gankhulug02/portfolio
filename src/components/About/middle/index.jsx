import React from "react";
import style from "./styles.module.scss";

const Middle = () => {
  const play = () => {
    const video = document.querySelector("#video");
    if (video.classList.contains("videoDisplay") === true) {
      console.log("true");
      video.classList.remove("videoDisplay");
      video.classList.add("video");
    } else {
      video.classList.add("videoDisplay");
      video.classList.remove("video");
      console.log("false");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>
          I`m{" "}
          <button className="text-primary" onClick={play}>
            Gankhulug
          </button>
          , a Web Developer
        </h2>
        <p>
          I help you build brand for your business at an affordable price.
          Thousands of clients have procured exceptional results while working
          with our dedicated team. when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p>
          Delivering work within time and budget which meets client’s
          requirements is our moto. Lorem Ipsum has been the industry's standard
          dummy text ever when an unknown printer took a galley.
        </p>
      </div>
      <div className={style.right}>
        <h5>Name: &nbsp;Urtnasan Gankhulug</h5>
        <h5>
          Email: &nbsp;
          <a href="mailto:huluguu0202@gmail.com" target="blank">
            Huluguu0202@gmail.com
          </a>
        </h5>
        <h5>Age: &nbsp;19</h5>
        <h5>From: &nbsp;Ulaanbaater Mongolia</h5>
      </div>
    </div>
  );
};

export default Middle;
