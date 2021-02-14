import { ACTIONS } from "../actions/ACTIONS";

export const editingReducer = (editing = false, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_EDITING:
      return !editing;
    default:
      return editing;
  }
};
