import React, { useContext } from "react";
import Style from "../Styles/task.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { GlobalContext } from "./GlobalProvider";

const Task = (props) => {
  const { task } = props;
  const { deleteTaskFromList } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTaskFromList(task);
  };
  return (
    <>
      <div className={`${Style.task_container}`}>
        <div className={`${Style.task}`}>
          <h3 className={`${Style.main_task}`}>{task}</h3>
        </div>
        <div className={`${Style.task_actions}`}>
          <CloseIcon className={`${Style.delete}`} onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default Task;
