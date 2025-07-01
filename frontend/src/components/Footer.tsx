import React from "react";
import HeartUnfilled from "./icons/HeardUnfilled";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="labelfontRegular secondaryFontColor footerInline">
        Made with{" "}
        <span>
          <HeartUnfilled className="heardUnfilledIcon" />
        </span>{" "}
        by Arale
      </p>
    </div>
  );
};

export default Footer;
