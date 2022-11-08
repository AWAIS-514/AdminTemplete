import React from "react";
import { BrowserRouter, Routes, Route,redirect } from "react-router-dom";

import Home from '../pages/Home';
import Review from "../pages/Review";
import Login from '../pages/Login';
import Business from '../pages/Business';
import Events from '../pages/Events';
import More from '../pages/More';
import ErrorPage from '../pages/404'
const AllRoutes = () => {

  return (
    <div >
      
      <BrowserRouter>
      
              <Routes>
                {/*Dashboard*/}
                <Route path="/" element={<Home />} exact />
                <Route path="/Home" element={<Home />} exact />
                <Route path="/Review" element={<Review />}exact />
                <Route path="/Login" element={<Login />} exact/>
                <Route path="/Business" element={<Business />}exact />
                <Route path="/Events" element={<Events />} exact/>
                <Route path="/More" element={<More />} exact/>
                <Route path="/Error" element={<ErrorPage />} />


              </Routes>
          
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
