const initialState = {
    postList: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return {
          ...state,
          postList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  