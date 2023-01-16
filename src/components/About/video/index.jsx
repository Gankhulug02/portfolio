import React from "react";
import style from "./style.module.css";

const Video = () => {
  return (
    <div>
      {" "}
      <iframe
        id="video"
        className="video"
        // width="420"
        // height="315"
        src="./images/me.mp4"
      ></iframe>
    </div>
  );
};

export default Video;
