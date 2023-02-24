const initialState = {
  imageFile: [],
};

const postExpImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_IMAGE_EXP_SUCCESS":
      return {
        ...state,
        imageFile: [...state.imageFile, action.payload],
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
