const initialState = {
  userList: [],
  currentUser: {},
};

  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            console.log(action.payload)
            return {
                ...state,
                userList:action.payload
            }
        case 'GET_MY_USER':  
            return {
                ...state.currentUser,
            }
        case 'GET_SPECIFIC_USER':  
            return {
                ...state.userList.find(user=>user._id===action.payload)
        }
        case 'UPDATE_USER':  
            return {
            ...state,
            currentSong:action.payload
        }
        default:
            return state
    }
  };

export default usersReducer;
