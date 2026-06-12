import React from "react";
import { ModeToggle } from "./Togglemode";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-6xl w-full m-auto px-6 py-6 flex items-center justify-between">
        <h1 className="flex text-base md:text-2xl font-bold text-blue-700">
          HealthHub
        </h1>
        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          <li>About </li>
          <li>Features </li>
          <li>Contact </li>
        </ul>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
