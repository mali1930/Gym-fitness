import React from "react";
import logoHero from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="flex w-full mt-16   py-3 flex-wrap  gap-5 items-center  px-10 justify-between">
      <div className="space-y-7 mt-3">
        <div>
          <p className="text-red-700 md:text-4xl text-2xl">Fitness Club</p>
        </div>
        <div>
          <p className="font-bold md:text-5xl md:leading-loose text-3xl">
            Sweet,Smile,
            <br />
            And Repeat
          </p>
        </div>
        <div>
          <p className="text-md">
            Check out the most effective exercises personalized to you.
          </p>
        </div>
        <button className="bg-red-700 px-7 py-2 text-white rounded-md cursor-pointer ">
          Explore Exercises
        </button>
      </div>
      <div>
        <img src={logoHero} alt="cover" />
      </div>
    </div>
  );
};

export default Banner;
