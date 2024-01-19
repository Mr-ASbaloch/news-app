import React from "react";
import category from "../assets/category.png";

const Category: React.FC = () => {
  return (
    <div className="flex justify-between mt-5 px-3 md:px-[5%]  ">
      <div className="flex capitalize font-semibold gap-5 ">
        <p className="border-b-2 border-red-600">latest stories</p>
        <p>opinion</p>
        <p>health</p>
      </div>
      <div className="hidden md:flex items-center">
        <img src={category} alt="category-icon" />
      </div>
    </div>
  );
};

export default Category;
