import React from "react";
import "./App.css";
import LoginPage from "./components/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./components/AuthPages/RegisterPage/RegisterPage";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import AlertNotification from "./components/Shared/AlertNotification";

function App() {
  // const navigate = Navigate();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/Dashboard" replace />} />
        </Routes>
      </Router>
      <AlertNotification/>
    </>
  );
}

export default App;
