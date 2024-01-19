import React from "react";
import logo from "../assets/logo.png";
import vector from "../assets/Vector.png";
import search from "../assets/search.png";
import menu from "../assets/menu.png";
const Header: React.FC = () => {
  return (
    <div className="main-div px-3 md:px-[5%]  ">
      <div className="flex justify-between   items-center mt-3">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className=" hidden md:flex items-center justify-between  gap-5 font-semibold capitalize ">
          <a href="">Corona Updates</a>
          <a href="">Politics</a>
          <a href="">Business</a>
          <a href="">Travel</a>
          <a href="">world</a>
          <a href="">podcasts</a>
        </div>

        <div className="flex justify-between items-center gap-3">
          <img src={vector} alt="logo" />
          <img src={search} alt="logo" />
          <img src={menu} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
