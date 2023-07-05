import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../redux/features/contactSlice';
import { RootState } from '../redux/store';
import { editContactSlice } from '../redux/features/selectedContactSlice';

interface EditContact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

function EditContactDetails() {
  const editContact = useSelector((state: RootState) => state.editContact) as unknown as EditContact;
  console.log('editcontact 1 ', editContact)
  const dispatch = useDispatch();

  const [status, setStatus] = useState<string>("active");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSaveContact = () => {
    const editedContact: EditContact = {
      id: editContact.id,
      firstName: firstName,
      lastName: lastName,
      status: status,
    };
    console.log("editedcontact ",editedContact)

    dispatch(updateContact({ id: editContact.id, updatedContact: editedContact }));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className='text-2xl font-medium mt-6'>Edit Contact Screen</h2>
      <div className="border border-black p-5 m-5 w-1/3">
        <div className="grid grid-cols-5">
          <div className="col-span-2 gap-y-2">
            <h1 className="text-center">First name:</h1>
            <h1 className="text-center mt-3">Last name:</h1>
            <h1 className="text-center mt-5">Status:</h1>
          </div>
          <div className="col-span-3 flex flex-col gap-y-2">
            <input
              type="text"
              className="border border-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="border border-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === 'active'}
                onChange={handleStatusChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === 'inactive'}
                onChange={handleStatusChange}
              />
              Inactive
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-2/5">
        <button
         onClick={handleSaveContact} 
         className="border border-black bg-gray-300 px-2">
          Save Edited Contact
        </button>
      </div>
    </div>
  );
}

export default EditContactDetails;