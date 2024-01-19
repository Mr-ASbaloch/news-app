import React from "react";
import footerLogo from "../assets/footerLogo.png";
import facebook from "../assets/facebookIcon.png";
import twitter from "../assets/twitterIcon.png";
import reddit from "../assets/redditIcon.png";
import network from "../assets/networkIcon.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#0E1E32] mt-5 p-5 text-white text-center md:flex md:justify-evenly  md:p-8">
      <div className="mb-5">
        <img src={footerLogo} alt="logo" className="mx-auto mb-2" />
        <p> copyright  2020 | NBC NEWS</p>
      </div>
      <div className="hidden md:flex flex-col">
        <p>Privacy Policy</p>
        <p>Do not sell my personal info</p>
        <p>Terms of Service</p>
        <p>nbcnews.com Site Map</p>
      </div>
      <div>
        <div className="mb-5 md:flex md:justify-between">
          <p>About</p>
          <p>Contact</p>
          <p>Coupons</p>
        </div>
        <div className="flex justify-center gap-5 pb-5">
          <img src={twitter} alt="icon" />
          <img src={facebook} alt="icon" />
          <img src={reddit} alt="icon" />
          <img src={network} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
