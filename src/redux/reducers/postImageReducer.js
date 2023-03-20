const initialState = {
  imageFile: [],
};

const postImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_IMAGE_SUCCESS':
      return {
        ...state,
        [action.payload.postId]: action.payload.image,
      };
    case 'POST_IMAGE_FAILURE':
      return {
        ...state,
        [action.payload.postId]: { error: action.payload.error },
      };
    default:
      return state;
  }
};

export default postImageReducer;
