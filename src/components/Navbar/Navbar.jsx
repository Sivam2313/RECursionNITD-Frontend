/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import logo from "../../assets/images/logoInverted.png";

const Navbar = () => {
  const [currPath, setCurrPath] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrPath(location.pathname);
  },[location.pathname])
  return (
    <div className="bg-background w-screen min-h-[100vh] h-fit">
      <div className="flex justify-center items-center h-[8vh] mt-9 w-screen absolute top-0 left-0 fixed">
        <div className="pl-3 pr-3 w-1/6">
          <img src={logo} className="h-[8vh]" alt="RECursion Logo"/>
        </div>
        <div className="pt-3 pl-3 pr-3 flex justify-center w-1/2 text-white font-sub font-extrabold text-[2vh]">
          <div className="px-6 h-[5vh] flex items-center cursor-pointer" style={
            currPath === "/home" ? {borderBottom: "4px solid #240090"} : {}
          }>
            Home
          </div>
          <div className="px-6 h-[5vh] flex items-center cursor-pointer" onClick={()=>navigate("/events")} style={
            currPath === "/events" ? {borderBottom: "4px solid #240090"} : {}
          }>
            Events
          </div>
          <div className="px-6 h-[5vh] flex items-center cursor-pointer" onClick={()=>navigate("/get_started")} style={
            currPath === "/get_started" ? {borderBottom: "4px solid #240090"} : {}
          }>
            Getting Started
          </div>
          <div className="px-6 h-[5vh] flex items-center cursor-pointer" onClick={()=>navigate("/experience")} style={
            currPath === "/experience" ? {borderBottom: "4px solid #240090"} : {}
          }>
            Interview Experiences
          </div>
          <div className="px-6 h-[5vh] flex items-center cursor-pointer" onClick={()=>navigate("/team")} style={
            currPath === "/team" ? {borderBottom: "4px solid #240090"} : {}
          }>
            Teams
          </div>
        </div>
        <div className="pl-3 pr-3 w-1/6 h-[8vh] flex justify-center items-center">
          <button className="bg-background px-9 rounded-full bg-primary py-3 text-xl text-white font-sub font-black" onClick={()=>navigate('/login')}>
            Login
          </button>
        </div>
      </div>

      <div className="App pt-[10vh]" > 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
  
};

export default Navbar;
