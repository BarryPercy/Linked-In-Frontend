const initialState = {
    UserList:[]
  }

  const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                songsSearched:true,
                songList: action.payload, 
            }
        case 'GET_MY_USER':  
            return {
                ...state,
                currentSong:action.payload
            }
        default:
            return state
    }
  }
  
  export default songsReducer
  