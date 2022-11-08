import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../Assets/ContextProvider";
import EnhancedTable from '../components/Tables/Review'
function Review(props) {
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
          <Header category="Page" title="Review" />
        </div>


        <EnhancedTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(Review);
