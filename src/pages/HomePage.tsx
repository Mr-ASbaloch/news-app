import React from "react";
import topImage from "../assets/topImage.png";
import love from "../assets/love.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import Header from "../components/Header";
import Category from "../components/Category";

import ViewMore from "../components/ViewMore";
import Footer from "../components/Footer";
import BreakingNews from "../components/BreakingNews";
import NewsPage from "./NewsPage";

const HomePage: React.FC = () => {
  return (
    <div className="main-div ">
      <Header />
      <div className=" w-full md:flex   mt-5 px-3 md:px-[5%]  ">
        <div className="md:w-[45%]">
          <img src={topImage} alt="image" className="h-full w-full  " />
        </div>
        <div className="md:w-[45%] flex flex-col md:p-8 md:text-start">
          <div className="hidden md:flex md:justify-between">
            <div>
              <p className="text-red-600  font-semibold ">Trending</p>
            </div>
            <div className="flex  items-center gap-5 ">
              <img src={love} alt="icon" />
              <img src={share} alt="icon" />
              <img src={save} alt="icon" />
            </div>
          </div>
          <div className=" text-xl font-semibold px-3 md:px-0 mt-3 te">
            <p className="md:mb-4">
              Cake meme reflects coronavirus absurdity in a world where nothing
              is what it seems
            </p>
          </div>
          <div>
            <p className="hidden md:inline-block mb-4">
              Earlier this month, a viral video depicting hyper-realistic cakes
              as everyday items had folks on social media double-guessing every
              other post, and sometimes even their own realities, effectively
              launching the next meme : “Is this real or is this cake?”
            </p>{" "}
          </div>
          <div className="hidden md:flex justify-between">
            <p className=" text-lg ">2 hours ago</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
      </div>

      {/* breaking news section  */}

      <BreakingNews />

      {/* category section  */}

      <Category />

      {/* Data Display  */}

      <NewsPage />

      {/* View More  */}
      <ViewMore />

      {/* footer  */}

      <Footer />
    </div>
  );
};

export default HomePage;
