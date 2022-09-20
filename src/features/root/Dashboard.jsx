import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Home from "../components/Home";
import MyProjects from "../components/MyProjects";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/myProjects" element={<MyProjects />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
