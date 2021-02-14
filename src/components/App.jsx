import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import AddNoteForm from "./AddNoteForm";
import EditNoteForm from "./EditNoteForm";
import NotesContainer from "./NotesContainer";
import Modal from "react-modal";
import { clearTitle } from "../actions/titleActions";
import { clearText } from "../actions/textActions";
import { setAddForm } from "../actions/modalActions";
import { toggleEditing } from "../actions/editingActions";

Modal.setAppElement("#root");
const App = () => {
  const dispatch = useDispatch();
  const editing = useSelector((state) => state.editingReducer);
  const showAddForm = useSelector((state) => state.addFormReducer);
  console.log(showAddForm);
  return (
    <main>
      <Header />
      <Modal
        isOpen={showAddForm}
        onRequestClose={() => dispatch(setAddForm(false))}
        className="modal"
      >
        <AddNoteForm />
      </Modal>
      <Modal
        isOpen={editing}
        onRequestClose={() => {
          dispatch(toggleEditing());
          dispatch(clearTitle());
          dispatch(clearText());
        }}
        className="modal"
      >
        <EditNoteForm />
      </Modal>
      <NotesContainer />
    </main>
  );
};

export default App;
