import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setEditContact } from "../redux/features/selectedContactSlice";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../redux/features/contactSlice";
import toast, { Toaster } from 'react-hot-toast';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

function ContactCards() {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (contact: Contact) => {
    try {
      const editedContactArray: Contact[] = [contact]; // Wrap the contact object in an array
      dispatch(setEditContact(editedContactArray));
      navigate("/contact-management-app/edit");
    } catch (error) {
      toast.error("Something went wrong, Try again later  ")
    }
  };

  const handleDelete = (contact: Contact) => {
    try {
      dispatch(deleteContact(contact.id));  
      toast.success("Deleted successfully")
    } catch (error) {
    toast.error("Something went wrong, Try again later  ")      
    }
  };
  
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {contacts?.map((contact: Contact) => {
        return (
          <div className="border-2 border-gray-300 bg-white rounded-lg m-5 w-48 flex flex-col justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFX6LwJpA124J4bO9TVdJwdOtHtuMgRb3lanLutZxGO44SjVlQqTMwWxNBAH7rrxzTdY&usqp=CAU"
              className="w-32 mt-3 rounded-full"
              alt=""
            />
            <h4 className="text-center font-medium m-2">
              {contact.firstName} {contact.lastName}
            </h4>
            <h5 className="border p-1 m-2">
              Status: <span className="text-red-600">{contact.status}</span>
            </h5>
            <button
              className="bg-[#5faa41] cursor-pointer shadow-inner text-white w-20 rounded-md border-gray-400 bg-gradient-to-t from-[#5faa41] to-[#c5e1ba] font-medium  border-2"
              onClick={() => handleEdit(contact)}
            >
              Edit
            </button>
            <button
              className="bg-[#d52828] cursor-pointer shadow-inner m-3 text-white w-20 rounded-md border-gray-400 bg-gradient-to-t from-[#d52828] to-[#f0b2b2] font-medium  border-2"
              onClick={() => handleDelete(contact)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <Toaster/>
    </div>
  );
}

export default ContactCards;
