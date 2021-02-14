import { ACTIONS } from "../actions/ACTIONS";

export const textReducer = (text = "", action) => {
  switch (action.type) {
    case ACTIONS.CAPTURE_TEXT:
      return action.payload;
    case ACTIONS.CLEAR_TEXT:
      return (text = "");
    default:
      return text;
  }
};
