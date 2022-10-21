import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Navbar from "../components/Navbar";
import  Sidebar from "../components/Sidebar";

import Home from '../pages/Home';

import { useStateContext } from "../Assets/ContextProvider";


const AllRoutes = () => {
  const { activeMenu } = useStateContext();

  return (
    <div >
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />{" "}
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72 " : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/*Dashboard*/}
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
