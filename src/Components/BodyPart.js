import React from "react";
import { useGetBodyPartQuery } from "../service/shazamCore";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import icon from "../assets/icons/gym.png";

const BodyPart = () => {
  const { data, isFetching, error } = useGetBodyPartQuery();

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      <div className="flex gap-5 justify-center items-center px-10 mt-10 max-w-full overflow-x-auto">
        {data?.map((item) => (
          <div key={item} className="bg-white border-2 py-16 px-6  ">
            <div className="flex items-center flex-col">
              <button>
                <img src={icon} alt="icon" className="w-20" />
              </button>
            </div>
            <h1 className="text-lg mt-4 w-[200px] text-center ">{item}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default BodyPart;
