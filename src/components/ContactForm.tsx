import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../redux/features/contactSlice';
import { RootState } from '../redux/store';
import { v4 as uuidv4 } from 'uuid';

function ContactForm() {
  const [status, setStatus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !status) {
      // Perform validation here, display error message or take appropriate action
      alert("cant be null")
      return;
    }
    const contactData = {
      id: uuidv4(),
      firstName,
      lastName,
      status
    };
    dispatch(setContacts([contactData]));
    setStatus('')
    setFirstName("")
    setLastName("")
  };
  const { contacts } = useSelector((state: RootState) => state.contacts);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="border border-black p-5 m-5 w-1/3">
        <div className="grid grid-cols-5">
          <div className="col-span-2 gap-y-2">
            <h1 className="text-center">First name:</h1>
            <h1 className="text-center mt-3">Last name:</h1>
            <h1 className="text-center mt-5">Status:</h1>
          </div>
          <div className="col-span-3 flex flex-col gap-y-2">
            <input
            required
              type="text"
              className="border border-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            required
              type="text"
              className="border border-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>
              <input
              required
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
        <button className="border border-black bg-gray-300 px-2" onClick={handleSubmit}>
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
