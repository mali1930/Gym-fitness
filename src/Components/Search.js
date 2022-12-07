import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../app/slices/exercises";

const Search = () => {
  const query = useSelector((s) => s.exercises.query);
  const dispatch = useDispatch();
  console.log(query);
  return (
    <div className="max-w-full flex justify-center">
      <input
        onChange={(e) => dispatch(setQuery(e.target.value))}
        value={query}
        className="w-[65%] border-2 px-2 "
        type="text"
        placeholder="Search Exercises"
      />
      <button className="bg-red-700 px-10 py-2 text-white">Search</button>
    </div>
  );
};

export default Search;
