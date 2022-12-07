import React from "react";
import Search from "../Components/Search";

const TypeExercises = () => {
  return (
    <div className="mt-20 px-2 ">
      <div className="text-center mb-4">
        <h1 className="font-bold text-2xl md:text-3xl">
          Awesome Exercises You Should Know
        </h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default TypeExercises;
