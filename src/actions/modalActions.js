import { ACTIONS } from "./ACTIONS";

export const setAddForm = (bool) => {
  return { type: ACTIONS.SET_ADD_FORM_MODAL, payload: bool };
};
