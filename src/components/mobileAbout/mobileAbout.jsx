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
          <li>Navigation 1</li>
          <li>Navigation 2</li>
          <li>Navigation 3</li>
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
