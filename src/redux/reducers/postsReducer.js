const initialState = {
    postList: [],
    commentList:[]
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return {
          ...state,
          postList: action.payload.posts,
        };
      case "GET_COMMENTS":
        return {
          ...state,
          commentList: action.payload,
        }
      default:
        return state;
    }
  };
  
  export default postsReducer;
  