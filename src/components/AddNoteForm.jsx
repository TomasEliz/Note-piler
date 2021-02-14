import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { captureTitle, clearTitle } from "../actions/titleActions";
import { captureText, clearText } from "../actions/textActions";
import { addNote } from "../actions/notesActions";
import { setAddForm } from "../actions/modalActions";
import { v4 as uuidv4 } from "uuid";

const AddNoteForm = () => {
  const txtAreaRef = useRef();
  const title = useSelector((state) => state.titleReducer);
  const text = useSelector((state) => state.textReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addNote({ id: uuidv4(), title, text }));
      dispatch(clearTitle())
      dispatch(clearText());
      dispatch(setAddForm(false));
    }
  };
  useEffect(() => txtAreaRef.current.focus(),[]);
  return (
    <form className="add-form" onSubmit={e => e.preventDefault()} >
      <div className="input-area">
      <input
        type="text"
        onChange={(e) => dispatch(captureTitle(e.target.value))}
        value={title}
        placeholder='Title'
      />
      <textarea
        className="add-form-textarea"
        // onKeyPress={(e) => {
        //   if (e.key === "Enter" && !e.shiftKey) {
        //     handleSubmit(e);
        //   }
        // }}
        onChange={(e) => dispatch(captureText(e.target.value))}
        type="text"
        value={text}
        ref={txtAreaRef}
        placeholder="Take a note"
      ></textarea>
      </div>
      <div className="button-group">
        <button
          className="button button-secondary"
          type="button"
          onClick={() => {
            dispatch(clearText());
            dispatch(clearTitle())
            dispatch(setAddForm(false));
          }}
        >
          Cancel
        </button>
        <button
          className="button button-primary"
          type="button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
