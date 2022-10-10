import React from "react";
import Style from "../Styles/task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = () => {
  return (
    <>
      <div className={`${Style.task_container}`}>
        <div className={`${Style.task}`}>
          <h3 className={`${Style.main_task}`}>hiiiii</h3>
        </div>
        <div className={`${Style.task_actions}`}>
          <EditIcon className={`${Style.edit}`} />
          <DeleteIcon className={`${Style.delete}`} />
          <CheckCircleOutlineIcon className={`${Style.completed}`} />
        </div>
      </div>
    </>
  );
};

export default Task;
