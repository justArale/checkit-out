import React from "react";
import HeartUnfilled from "../assets/icon/HeartUnfilled.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="labelfontRegular secondaryFontColor footerInline">
        Made with{" "}
        <span>
          <img src={HeartUnfilled} className="iconWrapper" />
        </span>{" "}
        by Arale
      </p>
    </div>
  );
};

export default Footer;
