import { ACTIONS } from "../actions/ACTIONS";

export const titleReducer = (title = "", action) => {
  switch (action.type) {
    case ACTIONS.CAPTURE_TITLE:
      return action.payload;
    case ACTIONS.CLEAR_TITLE:
      return (title = "");
    default:
      return title;
  }
};
