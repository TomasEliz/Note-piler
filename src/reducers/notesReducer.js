import { ACTIONS } from "../actions/ACTIONS";

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      return [action.payload, ...state];
    case ACTIONS.EDIT_NOTE:
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, title:action.payload.title, text: action.payload.text };
        }
        return note;
      });
    case ACTIONS.DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};
