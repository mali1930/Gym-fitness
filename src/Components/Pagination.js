import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { handleNext, handlePrev } from "../app/slices/exercises";

const Pagination = () => {
  const page = useSelector((s) => s.exercises.page);
  const dispatch = useDispatch();
  
  return (
    <div className="flex gap-10 mb-10">
      <button
        className="bg-red-700 px-5 py-1 rounded-lg"
        onClick={() => dispatch(handlePrev())}
      >
        <GrLinkPrevious size={28} />
      </button>
      <button>{page}</button>
      <button
        className="bg-red-700 px-5 py-1 rounded-lg"
        onClick={() => dispatch(handleNext())}
      >
        <GrLinkNext size={28} />
      </button>
    </div>
  );
};

export default Pagination;
