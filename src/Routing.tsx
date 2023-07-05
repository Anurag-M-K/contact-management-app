import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmptyContact from "./pages/EmptyContact";
import ContactFormPage from "./pages/ContactFormPage";
import EditContactDetails from "./components/EditContactDetails";


function Routing() {
  return (
    <div className="sm:mx-16  border-2 border-blue-800">
      <Header />
      <div className="flex">

      <Sidebar />
      <Routes>
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/" element={<EmptyContact />} />
        <Route path="/edit" element={<EditContactDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default Routing;
