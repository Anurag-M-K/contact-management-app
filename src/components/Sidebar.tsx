import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="flex flex-col font-medium text-2xl w-8 md:w-24 border-r h-full bg-white border-black border-2">
        <li className="text-blue-600 underline text-center  border-black border-b-2 py-2 flex md:flex-row md:justify-center">
          <BiSolidContact
            onClick={() => navigate("/")}
            className="md:hidden my-2"
          />
          <span
            className="hidden md:block text-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            Contact
          </span>
        </li>
        <li className="text-blue-600 underline text-center border-black border-b-2 py-2 flex md:flex-row md:justify-center  ">
          <HiOutlineChartSquareBar
            onClick={() => navigate("/dashboard")}
            className="md:hidden my-2 "
          />
          <span
            className="hidden md:block cursor-pointer "
            onClick={() => navigate("/dashboard")}
          >
            Charts and Map
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
