import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import ContactCards from "../components/ContactCards";

function EmptyContact() {
  const navigate = useNavigate();
  const { contacts } = useSelector((state: RootState) => state.contacts);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        onClick={() => navigate("/contact-form")}
        className="border-2 m-16 px-2 bg-gray-200 border-black"
      >
        Create Contact
      </button>

      {contacts?.length == 0 ? (
        <div className="border border-black px-5 py-2 my-20 bg-[#dcdcdc] flex items-start ">
          <AiFillCloseCircle size={40} />
          <div className="">
            <h3 className="font-medium">No Contact Found</h3>
            <h3 className="font-medium">Please add Contact From</h3>
            <h3 className="font-medium">Create Contact Button</h3>
          </div>
        </div>
      ) : (
        <ContactCards />
      )}
    </div>
  );
}

export default EmptyContact;
