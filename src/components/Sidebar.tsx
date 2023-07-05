import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { HiOutlineChartSquareBar } from "react-icons/hi";

function Sidebar() {
  return (
    <div>
      <ul className="flex flex-col font-medium text-2xl w-8 md:w-24 border-r h-full border-black border-2">
        <li className="text-blue-600 underline text-center  border-black border-b-2 py-2 flex md:flex-row md:justify-center">
          <BiSolidContact className="md:hidden my-2" />
          <span className="hidden md:block text-center">Contact</span>
        </li>
        <li className="text-blue-600 underline text-center border-black border-b-2 py-2 flex md:flex-row md:justify-center  ">
          <HiOutlineChartSquareBar className="md:hidden my-2 " />
          <span className="hidden md:block">Charts and Map</span>
        </li>
        <li className="text-center hidden md:flex ">Sidebar</li>
      </ul>
    </div>
  );
}

export default Sidebar;
