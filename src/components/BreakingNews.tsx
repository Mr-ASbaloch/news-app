import React from "react";

const BreakingNews: React.FC = () => {
  return (
    <div className="px-3 mt-4 md:px-[5%]">
      <div className=" bg-red-600 flex flex-col  mt-4 h-full w-full md:flex-row md:justify-center   ">
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

export default BreakingNews;
