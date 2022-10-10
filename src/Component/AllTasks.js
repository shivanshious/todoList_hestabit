import React from "react";
import Style from "../Styles/allTasks.module.css";
import Task from "./Task";

const AllTasks = () => {
  return (
    <>
      <div className={`${Style.tasks_container}`}>
        <Task />
        <Task />
      </div>
    </>
  );
};

export default AllTasks;
