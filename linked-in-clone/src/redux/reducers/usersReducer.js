const initialState = {
    users:{
        userList:[],
        currentUser:{},
    }
  }

  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state.users.userList,
            }
        case 'GET_MY_USER':  
            return {
                ...state.users.currentUser,
            }
        case 'GET_SPECIFIC_USER':  
            return {
                ...state.users.userList.find(user=>user._id===id)
        }
        case 'UPDATE_USER':  
            return {
            ...state,
            currentSong:action.payload
        }
        default:
            return state
    }
  }
  
  export default usersReducer
  