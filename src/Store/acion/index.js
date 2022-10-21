
// *****************************
// function for google login

const google = (data) => {
  console.log("out Dispatch");
  return (dispatch) => {
localStorage.setItem("Dispact Run wokrs",1)

    dispatch({ type:'app_data',payload:{name:'hassan',Roll:2}})
       
  };
};

// ******************************************************************************************

//  *********************************************************************************

// ================================================================

export { google };
