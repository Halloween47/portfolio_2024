import React from "react";
import MobileAboutMe from "../mobileAboutMe/mobileAboutMe";
import MobileCertificate from "../mobileCertificate/mobileCertificate";
import ShowMore from "../showMore/showMore";

const MobileAbout = () => {
  return (
    <div className="MobileAbout">
      <div className="MobileAboutNav">
        Navigation
        <ul>
          <li>A propos</li>
          <li>Dîplomes</li>
          <li>Expériences</li>
        </ul>
      </div>
      <div className="MobileAboutCompenents">
        MobileAboutCompenents
        <MobileAboutMe />
        <MobileCertificate />
        <ShowMore />
      </div>
    </div>
  );
};

export default MobileAbout;
