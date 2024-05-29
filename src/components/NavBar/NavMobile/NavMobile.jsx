import Sheets from "@/components/Sheets/Sheets";
import React from "react";

const NavMobile = () => {
  return (
    <ul className="w-[95%] mx-auto flex flex-col gap-2 h-auto pb-2 ">
      <li className=" text-slate-600 text-[14px]  py-[6px] flex items-end  ">
        Inicio
      </li>
      <li className=" text-slate-600 text-[14px]  py-[6px] flex items-end  border-t ">
        Profile
      </li>
      <li className=" text-slate-600 text-[14px]  py-[6px] flex items-end border-t  ">
        <Sheets />
      </li>
    </ul>
  );
};

export default NavMobile;
