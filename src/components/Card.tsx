import React from "react";
import love from "../assets/love.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import card from "../assets/card.png";
const Card: React.FC = () => {
  return (
    <div className="w-full mt-5 md:flex md:flex-wrap  px-3 md:px-[5%]  ">
      <div className="mt-5 shadow-lg md:w-1/3 md:px-5 pb-5 ">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold mb-2">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </p>
          <p className=" mb-2">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </p>
          <div className=" md:flex justify-between ">
            <p className="font-semibold">2 hours</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
          <img src={love} alt="icon" />
          <img src={share} alt="icon" />
          <img src={save} alt="icon" />
        </div>
      </div>
      <div className="mt-5 shadow-lg md:w-1/3 md:px-5 pb-5">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold mb-2">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </p>
          <p className=" mb-2">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </p>
          <div className=" md:flex justify-between ">
            <p className="font-semibold">2 hours</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
          <img src={love} alt="icon" />
          <img src={share} alt="icon" />
          <img src={save} alt="icon" />
        </div>
      </div>
      <div className="mt-5 shadow-lg md:w-1/3 md:px-5 pb-5 ">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold mb-2">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </p>
          <p className=" mb-2">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </p>
          <div className=" md:flex justify-between ">
            <p className="font-semibold">2 hours</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
          <img src={love} alt="icon" />
          <img src={share} alt="icon" />
          <img src={save} alt="icon" />
        </div>
      </div>{" "}
      <div className="mt-5 shadow-lg md:w-1/3 md:px-5  pb-5">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold mb-2">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </p>
          <p className=" mb-2">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </p>
          <div className=" md:flex justify-between ">
            <p className="font-semibold">2 hours</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
          <img src={love} alt="icon" />
          <img src={share} alt="icon" />
          <img src={save} alt="icon" />
        </div>
      </div>
      <div className="mt-5 shadow-lg md:w-1/3 md:px-5  pb-5">
        <div>
          <img src={card} alt="" />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold mb-2">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </p>
          <p className=" mb-2">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </p>
          <div className=" md:flex justify-between ">
            <p className="font-semibold">2 hours</p>
            <p>By Lucy Hiddleston | 4min read</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
          <img src={love} alt="icon" />
          <img src={share} alt="icon" />
          <img src={save} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
