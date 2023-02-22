const initialState = {
  expList: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_EXPERIENCES":
      console.log(action.payload);
      return {
        ...state,
        expList: action.payload,
      };
    case "POST_USER_EXP":
      return {
        ...state,
        expList: [...state.expList, action.payload],
      };
    default:
      return state;
  }
};

export default experiencesReducer;
