export const GET_USERS = 'GET_USERS'
export const GET_MY_USER = 'GET_MY_USER'
export const GET_SPECIFIC_USER = 'GET_SPECIFIC_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const getUsers=()=>{
    return async (dispatch)=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/")
            if (response.ok) {
              const users = await response.json()
              dispatch({
                type: GET_USERS,
                payload: users,
              })
            } else {
              console.log("Uh oh!")
            }
          } catch (error) {
            console.log(error)
          }
    }
}

export const getMyUser=()=>{
    return async (dispatch)=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me",)
            if (response.ok) {
              const user = await response.json()
              dispatch({
                type: GET_MY_USER,
                payload: user,
              })
            } else {
              console.log("Uh oh!")
            }
          } catch (error) {
            console.log(error)
          }
    }
}

export const getSpecificUser=(id)=>{
    return async (dispatch)=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me"+id)
            if (response.ok) {
              const user = await response.json()
              dispatch({
                type: GET_SPECIFIC_USER,
                payload: user,
              })
            } else {
              console.log("Uh oh!")
            }
          } catch (error) {
            console.log(error)
          }
    }
}

export const updateUser=(id,profile)=>{
    return async (user)=>{
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"
                },
            });
            if(response.ok){
                console.log("user edited")
                dispatch({
                    type: UPDATE_USER,
                    payload: profile,
                  })
            } else {
              console.log("Uh oh!")
            }
          } catch (error) {
            console.log(error)
          }
    }
}