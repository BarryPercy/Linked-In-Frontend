export const GET_USER_EXPERIENCES = "GET_USER_EXPERIENCES";
export const GET_USERS = "GET_USERS";
export const GET_MY_USER = "GET_MY_USER";
export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
export const UPDATE_USER = "UPDATE_USER";
export const POST_USER_EXP = "POST_USER_EXP";
export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const POST_POST = "POST_POST";
export const EDIT_POST = "EDIT_POSTS";
export const DELETE_POST = "DELETE_POSTS"
export const POST_IMAGE_SUCCESS = "POST_IMAGE_SUCCESS"
export const POST_IMAGE_FAILURE = "POST_IMAGE_FAILURE"
export const SET_CURRENT_TOKEN = "SET_CURRENT_TOKEN"


export const getUsers = (currentToken) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "GET",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        const users = await response.json();
        // console.log(users);
        dispatch({
          type: GET_USERS,
          payload: users,
        });
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyUser = (currentToken) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        const user = await response.json();
        dispatch({
          type: GET_MY_USER,
          payload: user,
        });
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setToken=(token)=>{
  return async (dispatch) =>{
    await dispatch({
      type: SET_CURRENT_TOKEN,
      payload: token,
    });
    dispatch(getMyUser(token))
    dispatch(fetchUserExps(token))
  }
}

export const getSpecificUser = (id, currentToken) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me" + id
      );
      if (response.ok) {
        const user = await response.json();
        dispatch({
          type: GET_SPECIFIC_USER,
          payload: user,
        });
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (editProfileObj, currentToken) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "PUT",
          body: JSON.stringify(editProfileObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch(getMyUser(currentToken))
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserExps = (currentToken) => {
  return async (dispatch) => {
    let userId = "";
    if (currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"){
      userId="63f331b78381fc0013fffad0"
    } else if(currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzc1YzgzODFmYzAwMTNmZmZhZDIiLCJpYXQiOjE2NzY4ODM4MDQsImV4cCI6MTY3ODA5MzQwNH0.xJ1_0xYnhu_VGi6iYMgPnmR9ZhWHNeBV0yjk_d6eSfo"){
      userId="63f3375c8381fc0013fffad2"
    }
    let url = "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences";
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences",
        {
          method: "GET",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EXPERIENCES,
          payload: data,
        });
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserExp = (newExp, currentToken) => {
  return async (dispatch) => {
    let userId = "";
    if (currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"){
      userId="63f331b78381fc0013fffad0"
    } else if(currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzc1YzgzODFmYzAwMTNmZmZhZDIiLCJpYXQiOjE2NzY4ODM4MDQsImV4cCI6MTY3ODA5MzQwNH0.xJ1_0xYnhu_VGi6iYMgPnmR9ZhWHNeBV0yjk_d6eSfo"){
      userId="63f3375c8381fc0013fffad2"
    }
    let url = "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences";
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences",
        {
          method: "POST",
          body: JSON.stringify(newExp),
          headers: {
            "Content-type": "application/json",
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch({
          type: POST_USER_EXP,
          payload: newExp,
        });
      } else {
        alert("failure to add new experience!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserExp = (expId, currentToken) => {
  return async (dispatch) => {
    let userId = "";
    if (currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"){
      userId="63f331b78381fc0013fffad0"
    } else if(currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzc1YzgzODFmYzAwMTNmZmZhZDIiLCJpYXQiOjE2NzY4ODM4MDQsImV4cCI6MTY3ODA5MzQwNH0.xJ1_0xYnhu_VGi6iYMgPnmR9ZhWHNeBV0yjk_d6eSfo"){
      userId="63f3375c8381fc0013fffad2"
    }
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences/" +
          expId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch(fetchUserExps(currentToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserExp = (editedExp, expId, currentToken) => {
  return async (dispatch) => {
    let userId = "";
    if (currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"){
      userId="63f331b78381fc0013fffad0"
    } else if(currentToken==="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzc1YzgzODFmYzAwMTNmZmZhZDIiLCJpYXQiOjE2NzY4ODM4MDQsImV4cCI6MTY3ODA5MzQwNH0.xJ1_0xYnhu_VGi6iYMgPnmR9ZhWHNeBV0yjk_d6eSfo"){
      userId="63f3375c8381fc0013fffad2"
    }
    const url = "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences/" +
    expId
    console.log(url)
    console.log(editedExp)
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/"+userId+"/experiences/" +
          expId,
        {
          method: "PUT",
          body: JSON.stringify(editedExp),
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        console.log("updated! ");
        dispatch(fetchUserExps(currentToken));
      } else {
        alert("Failed to edit!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPosts = (currentToken) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postPost = (post, currentToken) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts(currentToken));
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id, currentToken) => {
  return async (dispatch) => {
    try {
      console.log(currentToken)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/"+id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts(currentToken));
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPost = (post,id,currentToken) => {
  return async (dispatch) => {
    try {
      console.log("edited post", post, "id->",id)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/"+id,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
            Authorization:
              currentToken,
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts(currentToken));
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postImage = (id, imageFile, currentToken) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('post', imageFile);

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${id}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            currentToken,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    console.log(data)

    dispatch({
      type: POST_IMAGE_SUCCESS,
      payload: {
        id,
        image: data,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_IMAGE_FAILURE,
      payload: {
        id,
        error: error.message,
      },
    });
  }
};


