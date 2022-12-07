import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import icons from "../assets/icons/equipment.png";
import body from "../assets/icons/body-part.png";
import target from "../assets/icons/target.png";
import { useGetExerciseIdQuery } from "../service/shazamCore";
import Videos from "../Components/Videos";

const ExerciseId = () => {
  const { id } = useParams();
  const { data: exercise, isFetching, error } = useGetExerciseIdQuery({ id });

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <>
    <div className="flex   flex-wrap  items-center md:gap-28 gap-10 justify-center px-5   ">
      <div className="mt-24 mb-10 border-2 max-w-xl  bg-white ">
        <img
          src={exercise?.gifUrl}
          alt="image"
          className="flex items-center justify-center inset-0 h-screen"
        />
      </div>
      <div className=" space-y-4 max-w-xl  ">
        <div>
          <h1 className="text-xl font-bold md:text-3xl">
            {exercise?.name.toUpperCase()}
          </h1>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl"> {exercise?.target}</h1>
        </div>
        <div>
          <div className=" mb-2 flex flex-col gap-8 ">
            <h1>
              Exercises keep you strong {exercise?.name} is one of the best
              exercises to target you {exercise?.target}. It will help you
              improve your mood and gain energy!
            </h1>
            <button className=" flex rounded-full items-center gap-5   px-3 py-2 text-lg mb-2  text-black">
              <span>
                <img
                  src={target}
                  alt="gym"
                  className="w-[71px]  bg-yellow-300/50 rounded-full py-3 px-3"
                />
              </span>
              {exercise?.target}
            </button>
            <button className=" flex rounded-full items-center gap-5  px-3 py-2 text-lg mb-2  text-black">
              <span className="">
                <img
                  src={icons}
                  alt="gym"
                  className="w-[71px]  bg-yellow-300/50 rounded-full py-3 px-3"
                />
              </span>
              {exercise?.equipment}
            </button>
            <button className="flex rounded-full items-center gap-5  px-3 py-2 text-lg mb-2  text-black">
              <span>
                <img
                  src={body}
                  alt="gym"
                  className="w-[71px]  bg-yellow-300/50 rounded-full py-3 px-3"
                />
              </span>
              {exercise?.bodyPart}
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Videos />
    </>
  );
};

export default ExerciseId;
