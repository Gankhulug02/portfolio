import React from "react";
import style from "./style.module.scss";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div id="contact" className={style.container}>
      <h1>Let`s Talk</h1>
      <div className={style.bottom}>
        <div className={style.left}>
          <h2>Social</h2>
          <div className={style.social}>
            <SocialIcon network="youtube" className={style.appLogo} />
            <SocialIcon network="facebook" className={style.appLogo} />
            <SocialIcon network="twitter" className={style.appLogo} />
            <SocialIcon network="instagram" className={style.appLogo} />
          </div>
        </div>
        <div className={style.right}>
          {/* <div> */}
          <div>
            <h5>E-Mail</h5>
            <h6>Huluguu0202@gmail.com</h6>
          </div>
          <div>
            <h5>Phone</h5>
            <h6>88223402</h6>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
