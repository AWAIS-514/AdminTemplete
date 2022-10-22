import React from "react";
import { connect } from "react-redux";

function Login(props) {
  return (
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-5/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src={require("../Assets/login.png")}
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">




            <form>
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Login ID"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  required
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class=" inline-block px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>

               
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
