import React from "react";
import topImage from "../assets/topImage.png";
import love from "../assets/love.png";
import share from "../assets/share.png";
import save from "../assets/save.png";

const HomePage: React.FC = () => {
  return (
    <div className="main-div px-3 md:px-4 lg:px-[2%]">
      <div className=" w-full md:flex   mt-5">
        <div className="md:w-[45%]">
          <img src={topImage} alt="image" className="h-full w-full  " />
        </div>
        <div className="md:w-[45%] flex flex-col">
          <div className="hidden md:flex md:justify-between">
            <div>
                <p>Trending</p>
            </div>
            <div>
            <img src={love} alt="icon" />
            <img src={share} alt="icon" />
            <img src={save} alt="icon" />
            </div>
          </div>
          <div className=" text-xl font-semibold px-3 mt-3 te">
            <p>
              Cake meme reflects coronavirus absurdity in a world where nothing
              is what it seems
            </p>
          </div>
          <div>
            <p className="hidden md:inline-block">
              Earlier this month, a viral video depicting hyper-realistic cakes
              as everyday items had folks on social media double-guessing every
              other post, and sometimes even their own realities, effectively
              launching the next meme : “Is this real or is this cake?”
            </p>{" "}
          </div>
          <div className="hidden md:inline-block">
            <p>2 hours ago</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
      </div>

      {/* breaking news section  */}

      <div className=" bg-red-600 flex flex-col  mt-4 h-full w-full md:flex-row md:justify-center  ">
        <button className="bg-white text-red-600 mt-5 mx-auto p-2 w-1/2 md:w-auto  md:m-auto text-lg md:px-2">
          Breaking News
        </button>
        <div className="text-white text-center px-4 mt-4 mb-4 md:mx-auto">
          Kanye West says he's running for president in 2020.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
