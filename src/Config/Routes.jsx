import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Templete from "../pages/Templete";
import Login from '../pages/Login'

const AllRoutes = () => {

  return (
    <div >
      
      <BrowserRouter>
      
              <Routes>
                {/*Dashboard*/}
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Templete" element={<Templete />} />
                <Route path="/Login" element={<Login />} />


              </Routes>
          
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
