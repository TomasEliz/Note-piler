import { ACTIONS } from "./ACTIONS";

export const addNote = (note) => {
  return { type: ACTIONS.ADD_NOTE, payload: note };
};
export const updateNote = (newNote) => {
  return {type: ACTIONS.EDIT_NOTE, payload: newNote}
}
export const deleteNote = (note) => {
  return { type: ACTIONS.DELETE_NOTE, payload: note };
};
