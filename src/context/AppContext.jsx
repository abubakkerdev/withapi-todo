import React, { createContext, useContext, useReducer } from "react";

const ContextApp = createContext(null);
export const handleState = () => useContext(ContextApp);

const reducer = (state, action) => {
  switch (action.type) {
    case "taskAdd":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: action.id,
            task: action.task,
            checked: false,
          },
        ],
      };

    case "taskDelete":
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== action.id),
      };

    case "taskUpdate":
      return {
        ...state,
        taskList: state.taskList.map((el) => {
          if (el.id == action.data.id) {
            return action.data;
          } else {
            return el;
          }
        }),
      };

    case "taskAllCheck":
      return {
        ...state,
        checkedAll: action.data,
        taskList: state.taskList.map((el) => {
          return { ...el, checked: action.data };
        }),
      };
    case "taskAllDelete":
      return {
        ...state,
        checkedAll: false,
        taskList: state.taskList.filter((el) => el.checked !== true),
      };

    default:
      return {
        ...state,
        error: new Error(`Unknown Action:  ${action.type}`),
      };
  }
};

const initialValue = {
  checkedAll: false,
  taskList: [
    { id: 1, task: "one", checked: true },
    { id: 2, task: "two", checked: false },
    { id: 3, task: "three", checked: false },
  ],
  error: null,
};

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
}

export default AppContext;
