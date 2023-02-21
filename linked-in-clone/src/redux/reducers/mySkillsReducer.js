const initialState = {
    skills:[]
  }

  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SKILLS':
            return {
                ...state.users.userList,
            }
        default:
            return state
    }
  }
  
  export default usersReducer
  