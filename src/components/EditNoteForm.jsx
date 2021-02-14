import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { captureTitle, clearTitle } from "../actions/titleActions";
import { captureText, clearText } from "../actions/textActions";
import { updateNote } from "../actions/notesActions";
import { toggleEditing } from "../actions/editingActions";

const EditNoteForm = () => {
  const currentNote = useSelector((state) => state.currentNoteReducer);
  const title = useSelector((state) => state.titleReducer);
  const text = useSelector((state) => state.textReducer);
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="edit-form">
      <input
        onSubmit={(e) => e.preventDefault()}
        onChange={(e) => dispatch(captureTitle(e.target.value))}
        type="text"
        defaultValue={currentNote.title}
      />
      <textarea
        onChange={(e) => dispatch(captureText(e.target.value))}
        type="text"
        defaultValue={currentNote.text}
      ></textarea>
      <div className="button-group">
        <button
          className="button button-secondary"
          type="button"
          onClick={() => dispatch(toggleEditing())}
        >
          Cancel
        </button>
        <button
          className="button button-primary"
          type="button"
          onClick={() => {
            if (!title && !text) return;
            if (title && !text) {
              dispatch(
                updateNote({
                  id: currentNote.id,
                  title,
                  text: currentNote.text,
                })
              );
              dispatch(clearTitle());
            }
            if (!title && text) {
              dispatch(
                updateNote({
                  id: currentNote.id,
                  title: currentNote.title,
                  text,
                })
              );
              dispatch(clearText());
            }
            if (title && text) {
              dispatch(updateNote({ id: currentNote.id, title, text }));
              dispatch(clearTitle());
              dispatch(clearText());
            }
            dispatch(toggleEditing());
          }}
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default EditNoteForm;
