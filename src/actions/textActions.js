import { ACTIONS } from "./ACTIONS";

export const captureText = (inputValue) => {
  return { type: ACTIONS.CAPTURE_TEXT, payload: inputValue };
};
export const clearText = () => {
  return { type: ACTIONS.CLEAR_TEXT };
};
