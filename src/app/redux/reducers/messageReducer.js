import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";

const initialState = {};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
};

export default messageReducer;
