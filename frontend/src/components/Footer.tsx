import React from "react";
import HeartUnfilled from "./icons/HeardUnfilled";

const Footer: React.FC = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <p className="labelfontRegular secondaryFontColor footerInline">
        Made with{" "}
        <span aria-hidden="true">
          <HeartUnfilled className="heardUnfilledIcon" />
        </span>{" "}
        by Arale
      </p>
    </footer>
  );
};

export default Footer;
