const initialState = {
    eduList: [],
  };
  
  const experiencesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_EDUCATIONS":
        return {
          ...state,
          eduList:action.payload
        };
      case "POST_USER_EDU":
        return {
          ...state,
          eduList: [...state.expList, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default experiencesReducer;
  