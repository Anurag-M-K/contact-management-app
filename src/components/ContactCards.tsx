import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setEditContact } from '../redux/features/selectedContactSlice';
import { useNavigate } from 'react-router-dom';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

function ContactCards() {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  console.log("contacts ", contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (contact: Contact) => {
    const editedContactArray: Contact[] = [contact]; // Wrap the contact object in an array
    dispatch(setEditContact(editedContactArray));
    navigate("edit");
  };

  return (
    <div className='grid grid-cols-4'>
      {contacts?.map((contact: Contact) => {
        return (
          <div className="border-2 rounded-md m-5 w-48 flex flex-col justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRey6zTwQbSW_g2bOYe5sW4NOYjYS2RBJ75Ng&usqp=CAU" className="w-32 mt-3" alt="" />
            <h4 className="text-center font-medium m-2">{contact.firstName} {contact.lastName}</h4>
            <h5 className="border p-1 m-2">Status: <span className="text-red-600">{contact.status}</span></h5>
            <button className="bg-green-300 cursor-pointer shadow-inner text-white w-20 rounded-md border-green-400 font-medium hover:bggreen-400 border-2" onClick={() => handleEdit(contact)}>Edit</button>
            <button className="bg-red-300 cursor-pointer shadow-inner m-3 text-white w-20 rounded-md border-gray-400 font-medium hover:bg-red-400 border-2">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ContactCards;
