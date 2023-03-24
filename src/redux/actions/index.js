//USERS
export const GET_MY_USER = "GET_MY_USER";
export const GET_USERS = "GET_USERS";
export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
export const UPDATE_USER = "UPDATE_USER";

//EXPERIENCES
export const GET_USER_EXPERIENCES = "GET_USER_EXPERIENCES";
export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const POST_USER_EXP = "POST_USER_EXP";

//EDUCATIONS
export const GET_USER_EDUCATIONS = "GET_USER_EDUCATIONS";
export const GET_USER_EDUCATION = "GET_USER_EDUCATION";
export const POST_USER_EDU = "POST_USER_EDU";

//POSTS
export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const POST_POST = "POST_POST";
export const EDIT_POST = "EDIT_POSTS";
export const DELETE_POST = "DELETE_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";
// USERS

export const getMyUser = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + id
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

//GET USERS
export const getUsers = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/`
      );
      if (response.ok) {
        const users = await response.json();
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

//GET USER
export const getSpecificUser = (userId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId
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

//POST USER
export const postUser = (ProfileObj, userId, image) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId,
        {
          method: "POST",
          body: JSON.stringify(ProfileObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        if (image !== null || image !== undefined) {
          dispatch(profileImage(userId, image));
        }
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//PUT USER
export const updateUser = (editProfileObj, userId, image) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId,
        {
          method: "PUT",
          body: JSON.stringify(editProfileObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        if (image !== null && image !== undefined) {
          dispatch(profileImage(userId, image));
        } else {
          dispatch(getSpecificUser(userId));
        }
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST USER IMAGE
export const profileImage = (userId, imageFile) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("profile", imageFile);
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId + "/image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        dispatch(getSpecificUser(userId));
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {}
  };
};

//GET CV -> HREF to `${process.env.REACT_APP_BACK_END}/api/profile/users/`+userId+"/CV"

//EXPERIENCES

//GET EXPERIENCES
export const fetchUserExps = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId + "/experiences"
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EXPERIENCES,
          payload: data,
        });
      } else {
        console.log("Fetching Experiences went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST EXPERIENCE
export const postUserExp = (userId, newExp, image) => {
  console.log("what's happening in the post action", newExp);
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/experiences",
        {
          method: "POST",
          body: JSON.stringify(newExp),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("data in post action->", data);
        dispatch(postUserImageExp(userId, data._id, image));
      } else {
        console.log("Failure to post new experience!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET EXPERIENCE
export const fetchUserExp = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/experiences/" +
          expId
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EXPERIENCE,
          payload: data,
        });
      } else {
        console.log("Fetching Experiences went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//DELETE EXPERIENCE
export const deleteUserExp = (userId, expId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/experiences/" +
          expId,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        dispatch(fetchUserExps(userId));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//PUT EXPERIENCE
export const editUserExp = (editedExp, userId, expId, image) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/experiences/" +
          expId,
        {
          method: "PUT",
          body: JSON.stringify(editedExp),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        dispatch(postUserImageExp(userId, expId, image));
      } else {
        alert("Failed to edit Experience!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST EXPERIENCE IMAGE
export const postUserImageExp = (userId, expId, image) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/experiences/" +
          expId +
          "/image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        dispatch(fetchUserExps(userId));
      } else {
        console.log("failed experience image upload");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//EDUCATION

//GET EDUCATION
export const fetchUserEdus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId + "/educations"
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EDUCATIONS,
          payload: data,
        });
      } else {
        console.log("Fetching Education went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST EDUCATION
export const postUserEdu = (userId, newEdu, image) => {
  console.log("what's happening in the post action", newEdu);
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` + userId + "/educations",
        {
          method: "POST",
          body: JSON.stringify(newEdu),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("data in post action->", data);
        dispatch(postUserImageEdu(userId, data._id, image));
      } else {
        console.log("Failure to post new experience!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET EDUCATION
export const fetchUserEdu = (userId, eduId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/educations/" +
          eduId
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EDUCATION,
          payload: data,
        });
      } else {
        console.log("Fetching Edueriences went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//DELETE EDUCATION
export const deleteUserEdu = (userId, eduId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/educations/" +
          eduId,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        dispatch(fetchUserEdus(userId));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//PUT EDUCATION
export const editUserEdu = (editedEdu, userId, eduId, image) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/educations/" +
          eduId,
        {
          method: "PUT",
          body: JSON.stringify(editedEdu),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        dispatch(postUserImageEdu(userId, eduId, image));
      } else {
        alert("Failed to edit Education!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST EDUCATION IMAGE
export const postUserImageEdu = (userId, eduId, image) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/users/` +
          userId +
          "/educations/" +
          eduId +
          "/image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        dispatch(fetchUserEdus(userId));
      } else {
        console.log("failed education image upload");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POSTS

//GET Posts
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/`
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      } else {
        console.log("Fetching Posts went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST post
export const postPost = (post, image) => {
  return async (dispatch) => {
    console.log(post, image);
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        if (image !== null) {
          dispatch(postImage(data._id, image));
        } else {
          dispatch(fetchPosts());
        }
      } else {
        alert("Posting a post went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET Specific Post
export const fetchPost = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_POST,
          payload: data,
        });
      } else {
        console.log("Fetching Post " + postId + " went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//PUT Post
export const editPost = (post, postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("psoting went ok");
        dispatch(fetchPosts());
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//DELETE Post
export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      console.log();
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        dispatch(fetchPosts());
      } else {
        alert("Fetching went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST image to post
export const postImage = (postId, imageFile) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId + "/image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        dispatch(fetchPosts());
      } else {
        console.log("Failed to upload image");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//FRIENDS

export const friendRequest = (sender, reciver) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACK_END +
          `/api/users/${sender}/friendrequest/${reciver}`,
        { method: "POST" }
      );
      if (res.ok) {
        dispatch(getMyUser(sender));
        console.log("Friend requested success");
      } else {
        console.log("Friend request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const friendAccept = (sender, reciver) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACK_END +
          `/api/users/${sender}/acceptfriend/${reciver}`,
        { method: "POST" }
      );
      if (res.ok) {
        dispatch(getMyUser(sender));
        console.log("Friend accepted");
      } else {
        console.log("Friend accept failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const cancelRequest = (sender, reciver) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACK_END +
          `/api/users/${sender}/cancelrequest/${reciver}`,
        { method: "POST" }
      );
      if (res.ok) {
        dispatch(getMyUser(sender));
        console.log("Friend request cancel");
      } else {
        console.log("Friend request error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const friendCancel = (sender, reciver) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACK_END +
          `/api/users/${sender}/unfriend/${reciver}`,
        { method: "POST" }
      );
      if (res.ok) {
        dispatch(getMyUser(sender));
        console.log("Friend deleted");
      } else {
        console.log("Friend cancel failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST Likes
export const postLikes = (postId, userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` +
          postId +
          "/likes/" +
          userId,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        //const data = await response.json();

        dispatch(fetchPosts());
      } else {
        console.log("Like operation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postComment = (comment, postId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId + "/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts());
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getComments = (postId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + postId + "/comments"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: GET_COMMENTS,
          payload: data,
        });
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
