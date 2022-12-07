import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <RiLoader4Fill size={100} />
    </div>
  );
};

export default Loader;
