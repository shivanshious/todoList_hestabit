import React, { useContext } from "react";
import Style from "../Styles/task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
          <EditIcon className={`${Style.edit}`} />
          <DeleteIcon className={`${Style.delete}`} onClick={handleDelete} />
          <CheckCircleOutlineIcon className={`${Style.completed}`} />
        </div>
      </div>
    </>
  );
};

export default Task;
