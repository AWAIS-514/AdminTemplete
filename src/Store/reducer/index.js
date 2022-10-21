const INITIAL_STATE = {
  name: "HAssan",
};

export default (state = INITIAL_STATE, action) => {
  console.log(action,state);
  return state;
};
