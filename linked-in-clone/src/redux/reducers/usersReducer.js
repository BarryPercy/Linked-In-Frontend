const initialState = {
  userList: [],
  currentUser: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        userList: action.payload,
      };
    case "GET_MY_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "GET_SPECIFIC_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducer;
