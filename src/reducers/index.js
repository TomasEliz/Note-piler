import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { textReducer } from "./textReducer";
import { currentNoteReducer } from "./currentNoteReducer";
import { editingReducer } from "./editingReducer";
import { addFormReducer } from "./addFormReducer";
import { titleReducer } from "./titleReducer";

const allReducers = combineReducers({
  notesReducer,
  textReducer,
  currentNoteReducer,
  editingReducer,
  addFormReducer,
  titleReducer,
});

export default allReducers;
