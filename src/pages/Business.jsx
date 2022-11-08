import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import { useStateContext } from "../Assets/ContextProvider";
import EnhancedTable from "../components/Tables/Business";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { Animated } from "react-animated-css";
import { FinalReview, Global } from "../Assets/Global_Variable";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
function Business(props) {
  const { activeMenu } = useStateContext();
  // CatagoriesModal
  const [CatagoriesSearchModal, setCatagoriesSearchModal] =React.useState(false);
  const [modalAnimation, setmodalAnimation] = React.useState(false);
  const [CatagoriesShownModal, setCatagoriesShownModal] = React.useState(false);
// Images Modal 
const [ImagesModal, setImagesModal] =React.useState(false);
  const [modalImageAnimation, setmodalImageAnimation] = React.useState(false);


  // CatagoriesModal 
  function OpenCatagorieModal() {
    setmodalAnimation(true);
    setCatagoriesSearchModal(true);
  }

  function closeModal() {
    setmodalAnimation(false);
    setTimeout(() => {
      setCatagoriesSearchModal(false);
    }, 500);
  }

  function OpenCatagorieModal1() {
    setCatagoriesShownModal(true);
  }

  function closeModal1() {
    setCatagoriesShownModal(false);
  }


// Images Modal 

function openImageModal() {
  setImagesModal(true);
    setmodalImageAnimation(true);

}

function closeImageModal() {
  setmodalImageAnimation(false);
  setTimeout(() => {
    setImagesModal(false);
  }, 500);
}



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
          <Header category="Page" title="Business" />
        </div>

        <EnhancedTable open={OpenCatagorieModal}  ImagesModal={openImageModal} />
      </div>

      <Modal
        isOpen={CatagoriesSearchModal}
        onRequestClose={closeModal}
        className="CatgorieModal "
        contentLabel="Example Modal"
      >
        <Animated
          animationIn={"bounceInUp"}
          animationOut={"bounceOutDown"}
          isVisible={modalAnimation}
          // isVisible={true}
        >
          <div className="modalBody">
            <div style={{ width: "100%", marginLeft: "0%" }}>
              <FiChevronLeft
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => closeModal()}
              />
            </div>
            <h2
              className="font-medium leading-tight text-3xl mt-0 mb-2 text-slate-600 "
              style={{ marginTop: -10 }}
            >
              Edit Catagories
            </h2>

            <p className="font-medium leading-tight text-xs mt-0 mb-2 text-slate-600">
              Search upto three Best Catagories Related to your Business
            </p>

            <div class="relative searchBox">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-2 pl-10 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-100 focus:ring-orane-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="Search Mockups, Logos..."
                // onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="searchedCard">
              <p className="font-bold leading-tight text-sm mt-2 text-slate-600 ">
                Name
              </p>
            </div>
          </div>
        </Animated>
      </Modal>

      <Modal
        isOpen={CatagoriesShownModal}
        onRequestClose={closeModal1}
        className="CatgorieModal"
        contentLabel="Example Modal"
      >
        <div className="modalBody">
          <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-slate-600">
            Catagories List
          </h2>

          <p className="font-medium leading-tight text-xs mt-0 mb-2 text-slate-600">
            Provide upto three catagories that best describe core focus of
            business
          </p>

          <div className="searchedCard flex flex-row align-center justify-between">
            <p className="font-bold leading-tight text-sm mt-2 text-slate-600 ml-2">
              Name
            </p>

            <AiOutlineCloseCircle
              size={20}
              style={{ marginRight: 10, marginTop: 5 }}
            />
          </div>

          <button
            type="button"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-3"
          >
            Add New Catagorie
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={ImagesModal}
        onRequestClose={closeImageModal}
        className="CatgorieModal "
        contentLabel="Example Modal"
      >
      <Animated
        animationIn={"bounceInUp"}
        animationOut={"bounceOutDown"}
        isVisible={modalImageAnimation}
        // isVisible={true}
        className='animationBox'
      >
        <div className="modalBodyPicture">
          <div style={{ width: "100%", marginLeft: "0%" }}>
            <FiChevronLeft
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => closeImageModal()}
            />
          </div>
          <h2
            className="font-medium leading-tight text-3xl mt-0 mb-2 text-slate-600 "
            style={{ marginTop: -10 }}
          >
            Edit Images
          </h2>

          <p className="font-medium leading-tight text-xs mt-0 mb-2 text-slate-600">
            You can manage all business images
          </p>

          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 overflow-auto">
            <div class="flex flex-wrap -m-1 md:-m-2">
              {FinalReview.map((v, i) => {
                return (
                  <div class="flex flex-wrap w-1/4 mt-2 imageSlider">
                    <BsTrash
                      size={26}
                      style={{
                        cursor: "pointer",
                        // marginLeft: "84%",
                        // zIndex: 1,
                        // position:'absolute',
                       marginLeft:'84%'

                      }}
                      color={Global.color}
                      onClick={()=>confirmAlert({
                        customUI: ({ onClose }) => {
                          return (
                            <div className='custom-ui'>
                              <h1 className="text-xl ">Are you sure?</h1>
                              <p className="text-xs mt-2">You want to delete this file?</p>
                              <div className="flex flex-row mt-4">
                              <button onClick={onClose}>No</button>
                              <button
                                onClick={() => {
                                  onClose();
                                }}
                              >
                                Yes, Delete it!
                              </button>
                                </div>
                            </div>
                          );
                        }
                      })}
                    />
                    <div class="w-full p-1 md:p-2" style={{ marginTop:10 }}>
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        </Animated>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Business);
