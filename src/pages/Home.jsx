import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

function Home(props) {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Home" />
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
