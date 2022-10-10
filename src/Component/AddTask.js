import React from "react";
import Style from "../Styles/addTask.module.css";

const AddTask = () => {
  return (
    <>
      <div className={`${Style.inputHead}`}>
        <input
          type="text"
          className={`${Style.input}`}
          placeholder="add task..."
        />
        <div className={`${Style.input_actions}`}>
          <button className={`${Style.buttonHead} ${Style.buttonHead_save}`}>
            Save
          </button>
          <button className={`${Style.buttonHead} ${Style.buttonHead_discard}`}>
            Discard
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
