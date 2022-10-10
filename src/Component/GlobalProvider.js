import React, { createContext, useReducer } from "react";

const initialState = {
  todo_list: [],
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return {
        todo_list: [action.payload, ...state.todo_list],
      };
    case "remove_task":
      return {
        todo_list: state.todo_list.filter((item) => item !== action.payload),
      };
    case "edit_task":
      return {
        todo_list: state.todo_list,
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTaskToList = (task) => {
    dispatch({
      type: "add_task",
      payload: task,
    });
  };

  const deleteTaskFromList = (task) => {
    dispatch({
      type: "remove_task",
      payload: task,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ todo_list: state.todo_list, addTaskToList, deleteTaskFromList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
