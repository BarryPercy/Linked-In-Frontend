import { GET_USER_EXPERIENCE } from "../actions";

const initialState = {
  expList: [],
};

const experiencesRecuder = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_EXPERIENCE:
      return {
        ...state,
        expList: action.payload,
      };
    default:
      return state;
  }
};

export default experiencesRecuder;
