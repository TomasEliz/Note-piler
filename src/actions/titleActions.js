import { ACTIONS } from "./ACTIONS";

export const captureTitle = (inputValue) => {
  return { type: ACTIONS.CAPTURE_TITLE, payload: inputValue };
};
export const clearTitle = () => {
  return { type: ACTIONS.CLEAR_TITLE };
};
