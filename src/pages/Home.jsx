import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PieChart from "../components/PieChart";
import { useStateContext } from "../Assets/ContextProvider";

// Icons import
import { AiOutlineMinusCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { MdOutlineFindInPage } from "react-icons/md";

function Home(props) {
  const { activeMenu } = useStateContext();

  return (
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

          <div className="backChange">
          <Header category="Page" title="Dashbaord" />
            <div class="container items-center px-4 py-1 m-auto mt-1">
              <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
                <div class="w-full p-2 lg:w-1/4 md:w-1/2">
                  <div class="flex flex-col px-6 py-2 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group cursor-pointer">
                    <div class="flex flex-row justify-between items-center">
                      <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                        <AiOutlineUsergroupAdd size={26} color="#000" />
                      </div>
                      <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                        <AiOutlineMinusCircle
                          className="mr-2 mt-0.5"
                          color={"#2DCEA8"}
                          size={22}
                        />
                        12%
                      </div>
                    </div>
                    <h1 class="text-2xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                      4000
                    </h1>
                    <div class="flex flex-row justify-between group-hover:text-gray-200">
                      <p className="text-xs">Totoal Users</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="w-full p-2 lg:w-1/4 md:w-1/2">
                  <div class="flex flex-col px-6 py-2 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group cursor-pointer">
                    <div class="flex flex-row justify-between items-center">
                      <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                        <CiBank size={26} color="#000" />
                      </div>
                      <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                        <AiOutlineMinusCircle
                          className="mr-2 mt-0.5"
                          color={"#2DCEA8"}
                          size={22}
                        />
                        5%
                      </div>
                    </div>
                    <h1 class="text-2xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                      2000
                    </h1>
                    <div class="flex flex-row justify-between group-hover:text-gray-200">
                      <p className="text-xs">Total Businesses</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="w-full p-2 lg:w-1/4 md:w-1/2">
                  <div class="flex flex-col px-6 py-2 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group cursor-pointer">
                    <div class="flex flex-row justify-between items-center">
                      <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                        <BiDollar size={26} color="#000" />
                      </div>
                      <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                        <AiOutlineMinusCircle
                          className="mr-2 mt-0.5"
                          color={"#2DCEA8"}
                          size={22}
                        />
                        15%
                      </div>
                    </div>
                    <h1 class="text-2xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                      3000$
                    </h1>
                    <div class="flex flex-row justify-between group-hover:text-gray-200">
                      <p className="text-xs">Total Payments</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="w-full p-2 lg:w-1/4 md:w-1/2">
                  <div class="flex flex-col px-6 py-2 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group cursor-pointer">
                    <div class="flex flex-row justify-between items-center">
                      <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                        <MdOutlineFindInPage size={26} color="#000" />
                      </div>
                      <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                        <AiOutlineMinusCircle
                          className="mr-2 mt-0.5"
                          color={"#2DCEA8"}
                          size={22}
                        />
                        10%
                      </div>
                    </div>
                    <h1 class="text-2xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                      2000
                    </h1>
                    <div class="flex flex-row justify-between group-hover:text-gray-200">
                      <p className="text-xs">Received Requests</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
