import React from "react";
import MobileAboutMe from "../../components/componentAboutMe/mobileAboutMe";
import MobileCertificate from "../../components/mobileCertificate/mobileCertificate";
import ShowMore from "../../components/showMore/showMore";
import {
  showAboutMe,
  showCertificate,
  showExperiences,
} from "../../store/aboutSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuMobile from "../../components/menuMobile/menuMobile";

const MobileAbout = () => {
  const aboutMe = useSelector((state) => state.about.aboutMeState);
  const certificate = useSelector((state) => state.about.certificateState);
  const experiences = useSelector((state) => state.about.experiencesState);
  console.log(certificate);

  const dispatch = useDispatch();

  const handleClickNavItem = (e) => {
    e.preventDefault();

    const clickedLiText = e.target.innerText;
    console.log(clickedLiText);

    if (clickedLiText === "Dîplomes") {
      console.log("ICI, voici " + clickedLiText);
      dispatch(showCertificate());
    } else if (clickedLiText === "Expériences") {
      console.log("ICI, voici " + clickedLiText);
      dispatch(showExperiences());
    } else if (clickedLiText === "A propos") {
      console.log("ICI, voici " + clickedLiText);
      dispatch(showAboutMe());
    }
  };

  return (
    <div className="MobileAbout">
      <div className="MobileAboutNav">
        <ul>
          <li className="MobileAboutNavLi" onClick={handleClickNavItem}>
            A propos
          </li>
          <li className="MobileAboutNavLi" onClick={handleClickNavItem}>
            Dîplomes
          </li>
          <li className="MobileAboutNavLi" onClick={handleClickNavItem}>
            Expériences
          </li>
        </ul>
      </div>
      <div className="MobileAboutCompenents">
        {aboutMe && <MobileAboutMe />}
        {certificate && <MobileCertificate />}
        {experiences && <ShowMore />}
      </div>
      <MenuMobile />
    </div>
  );
};

export default MobileAbout;
