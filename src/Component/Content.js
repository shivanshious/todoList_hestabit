import React from "react";
import AddTask from "./AddTask";
import Style from "../Styles/content.module.css";
import AllTasks from "./AllTasks";

const Content = () => {
  return (
    <>
      <div className={`${Style.content_container}`}>
        <AddTask />
        <AllTasks />
      </div>
    </>
  );
};

export default Content;
