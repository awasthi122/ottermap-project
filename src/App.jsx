import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FormPage from "./components/Formpage";
import MapPage from "./components/Mappage";

const NotFoundPage = () => {
  return <h2>404: Page Not Found</h2>;
};

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router basename="/ottermap-project">
      <Routes>
        <Route path="/" element={<FormPage setUserData={setUserData} />} />
        <Route path="/map" element={<MapPage userData={userData} />} />
        {/* Redirect unknown routes to FormPage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
