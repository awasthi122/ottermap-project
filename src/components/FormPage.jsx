import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = ({ setUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ firstName, mobile });
    navigate("/map"); // Redirect to the map page
  };
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
