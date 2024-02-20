import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/AppBar";
import Contact from "./pages/Contact";
import Config from "./config";
import "./App.css";
import SignUp from "./pages/SignUp";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  const { colorConfig } = Config;
  const [backgroundColor] = useState(colorConfig.mainColor);

  useEffect(() => {
    // Update the CSS variable when the backgroundColor state changes
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  }, [backgroundColor]);
  return (
    <div className="App">
      <AuthProvider>
        <NavBar></NavBar>
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
