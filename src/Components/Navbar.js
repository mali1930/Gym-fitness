import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-1.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const home = useNavigate();
  return (
    <div className="flex text-white w-full gap-4  z-50 fixed top-0 left-0 py-4 bg-black justify-between px-12 items-center">
      <div>
        <img
          onClick={() => home("/")}
          src={logo}
          alt="logo"
          className="invert cursor-pointer"
        />
      </div>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
