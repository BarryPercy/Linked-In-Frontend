export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";

export const fetchUserExp = async ({ userId }) => {
  return async (dispatch) => {
    const basepoint = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      const response = await fetch(basepoint + userId + "/experiences", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_USER_EXPERIENCE,
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
