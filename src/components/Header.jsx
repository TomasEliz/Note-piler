import React from "react";
import { useDispatch } from "react-redux";
import { setAddForm } from "../actions/modalActions";
import '../css/header.css'

const Header = () => {
    const dispatch = useDispatch()

  return (
    <header>
      <h1>Note Piler</h1>
      <div onClick={() => dispatch(setAddForm(true))}  className="fake-input">
          <p>Type a note</p>
      </div>
    </header>
  );
};

export default Header;
