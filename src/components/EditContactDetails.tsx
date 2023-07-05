import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../redux/features/contactSlice";
import { RootState } from "../redux/store";
import { editContactSlice } from "../redux/features/selectedContactSlice";

interface EditContact {
  editContact: any;
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

function EditContactDetails() {
  const editContact = useSelector(
    (state: RootState) => state.editContact
  ) as unknown as EditContact;
  const dispatch = useDispatch();

  const [status, setStatus] = useState<string>("active");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSaveContact = () => {
    console.log("editcontact 1 ", editContact);
    const editedContact: EditContact = {
      id: editContact.editContact[0].id,
      firstName: firstName,
      lastName: lastName,
      status: status,
      editContact: undefined,
    };
    dispatch(
      updateContact({
        id: editContact.editContact[0].id,
        updatedContact: editedContact,
      })
    );
    setStatus("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="border bg-white border-black p-5 m-5 md:w-1/3 md:min-w-[350px]">
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
                checked={status === "active"}
                onChange={handleStatusChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
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
          className="border border-black mb-10 bg-gray-300 px-2"
        >
          Save Edited Contact
        </button>
      </div>
    </div>
  );
}

export default EditContactDetails;
