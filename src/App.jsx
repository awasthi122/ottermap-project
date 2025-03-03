import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/Formpage";
import MapPage from "./components/Mappage";

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage setUserData={setUserData} />} />
        <Route path="/map" element={<MapPage userData={userData} />} />
      </Routes>
    </Router>
  );
};

export default App;
