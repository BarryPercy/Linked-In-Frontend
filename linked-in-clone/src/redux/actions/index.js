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


export const getUsers = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "GET",
          headers: {
            Authorization:
              "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
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

export const getMyUser = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        const user = await response.json();
        console.log(user)
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

export const getSpecificUser = (id) => {
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

export const updateUser = (id, profile) => {
  return async (user) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        console.log("user edited");
        // eslint-disable-next-line no-undef
        dispatch({
          type: UPDATE_USER,
          payload: profile,
        });
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserExps = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f331b78381fc0013fffad0/experiences",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
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

export const postUserExp = (newExp) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f331b78381fc0013fffad0/experiences",
        {
          method: "POST",
          body: JSON.stringify(newExp),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        dispatch({
          type: POST_USER_EXP,
          payload: newExp,
        });
        console.log("new experience added!");
      } else {
        alert("failure to add new experience!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserExp = (expId) => {
  console.log(expId);
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f331b78381fc0013fffad0/experiences/" +
          expId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        console.log("deleted exp");
        dispatch(fetchUserExps);
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserExp = (newExp, id) => {
  console.log(newExp);
  console.log(id);
  // console.log("json new exp ==>", JSON.stringify(newExp));
  // let newExpFilter = {
  //   role: newExp.role,
  //   company: newExp.company,
  //   startDate: newExp.startDate,
  //   endDate: newExp.endDate,
  //   description: newExp.description,
  //   area: newExp.area,
  // };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f331b78381fc0013fffad0/experiences/" +
          id,
        {
          method: "PUT",
          body: JSON.stringify(newExp),
          headers: {
            Authorization:
              "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        dispatch(fetchUserExps);
      } else {
        alert("Failed to edit!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
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

export const postPost = (post) => {
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts);
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postImage = (id, imageFile) => async (dispatch) => {
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzcxNTcwMTAsImV4cCI6MTY3ODM2NjYxMH0.yoBiPvaQO7HvWs852rXtNJq38xhN6P565Ve-zUjFoxo",
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


