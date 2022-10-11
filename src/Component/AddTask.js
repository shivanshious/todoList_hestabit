import React, { useState, useContext } from "react";
import Style from "../Styles/addTask.module.css";
import { GlobalContext } from "./GlobalProvider";

const AddTask = () => {
  const [text, setText] = useState("");
  const { addTaskToList } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    if (text.length) {
      event.preventDefault();
      addTaskToList(text);
      setText("");
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className={`${Style.inputHead}`}>
        <input
          type="text"
          className={`${Style.input}`}
          placeholder="add task..."
          value={text}
          onChange={handleChange}
        />
        <div className={`${Style.input_actions}`}>
          <button
            className={`${Style.buttonHead} ${Style.buttonHead_save}`}
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            className={`${Style.buttonHead} ${Style.buttonHead_discard}`}
            onClick={() => {
              setText("");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
