"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import NavMobile from "./NavMobile/NavMobile";
import { IoCloseSharp } from "react-icons/io5";
import Sheets from "../Sheets/Sheets";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className=" py-4 md:py-2 flex flex-col md:flex   md:flex-row shadow-md  w-full h-auto">
      <div className="  flex items-center justify-between w-[95%] mx-auto">
        <h2>ElectroShop</h2>
        {mobile ? (
          <IoCloseSharp
            size={30}
            className="md:hidden"
            onClick={() => setMobile(!mobile)}
          />
        ) : (
          <FiMenu
            size={30}
            className="md:hidden"
            onClick={() => setMobile(!mobile)}
          />
        )}
        <ul className="hidden md:flex w-auto  gap-2   h-auto py-2 ">
          <li className="text-[15px] cursor-pointer px-2">Inicio</li>
          <li className="text-[15px] cursor-pointer px-2">Profile</li>
          <li className="text-[15px] cursor-pointer px-2">
            <Sheets />
          </li>
        </ul>
      </div>
      {mobile && <NavMobile />}
    </div>
  );
};

export default NavBar;
