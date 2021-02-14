import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../actions/notesActions";
import { toggleEditing } from "../actions/editingActions";
import { setCurrentNote } from "../actions/currentNoteAction";
import "../css/note.css";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <article className="note">
      <div className="note-text">
        <h3>{note.title}</h3>
        <p>{note.text}</p>
      </div>
      <div className="button-group">
        <button
          className="button button-secondary"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          Delete
        </button>
        <button
          className="button button-primary"
          onClick={() => {
            dispatch(toggleEditing());
            dispatch(setCurrentNote(note));
          }}
        >
          Edit
        </button>
      </div>
    </article>
  );
};

export default Note;
