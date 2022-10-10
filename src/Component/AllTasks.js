import React, { useContext } from "react";
import Style from "../Styles/allTasks.module.css";
import Task from "./Task";
import { GlobalContext } from "./GlobalProvider";

const AllTasks = () => {
  const { todo_list } = useContext(GlobalContext);
  return (
    <>
      <div className={`${Style.tasks_container}`}>
        {todo_list.map((task, idx) => {
          return <Task key={idx} task={task} />;
        })}
      </div>
    </>
  );
};

export default AllTasks;
