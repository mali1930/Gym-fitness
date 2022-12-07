import React from "react";
import { useGetExerciseQuery } from "../service/shazamCore";
import Loader from "./Loader";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { useSelector } from "react-redux";

const ExerciseCard = () => {
  const exercisesState = useSelector((s) => s.exercises);
  const nav = useNavigate();
  const handleNav = (exercise) => {
    nav(`/exercise/${exercise?.id}`);
  };
  const {
    data: exercises,
    isFetching,
    error,
  } = useGetExerciseQuery(exercisesState);

  if (isFetching) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="mt-20">
      <div className="mb-6">
        <h1 className="md:text-4xl text-start px-5 text-2xl mb-20 ">
          Showing Results
        </h1>
      </div>
      <div className="flex gap-10  flex-wrap justify-center items-center px-10">
        {exercises?.map((item) => (
          <div key={item.id} onClick={() => handleNav(item)}>
            <div className="flex gap-4 bg-white hover:scale-90 cursor-pointer transition-all  border-red-700 border-t-4   ">
              <div>
                <div className="max-w-lg">
                  <img src={item.gifUrl} alt="img" className="object-contain" />
                </div>
                <div className=" mb-2 flex gap-10 px-4">
                  <button className="bg-yellow-500/60 px-3 py-1 text-sm mb-2 rounded-md text-white">
                    {item.bodyPart}
                  </button>
                  <button className="bg-pink-500/60 px-3 py-1 text-sm mb-2 rounded-md text-white">
                    {item.target}
                  </button>
                </div>
                <div className="px-4 text-md mb-2 max-w-[310px] ">
                  <h1 className="text-sm">{item.name}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default ExerciseCard;
