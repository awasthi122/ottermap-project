
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
