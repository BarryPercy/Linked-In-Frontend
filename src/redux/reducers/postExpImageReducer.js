const initialState = {
  imageFile: [],
};

const postExpImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_IMAGE_EXP_SUCCESS":
      return {
        ...state,
        [action.payload.expId]: action.payload.image,
      };
    case "POST_IMAGE_FAILURE":
      return {
        ...state,
        [action.payload.expId]: { error: action.payload.error },
      };

    default:
      return state;
  }
};

export default postExpImageReducer;
