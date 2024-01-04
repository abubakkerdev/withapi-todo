import { useState } from "react";
import { handleState } from "./context/AppContext";

let nextId = 4;

function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = handleState();

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onKeyUp={(e) => {
          e.key == "Enter" &&
            inputValue != "" &&
            dispatch({
              type: "taskAdd",
              task: inputValue,
              id: nextId++,
            });

          e.key == "Enter" && setInputValue("");
        }}
        placeholder="create your task"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => {
          inputValue != "" &&
            dispatch({
              type: "taskAdd",
              task: inputValue,
              id: nextId++,
            });
          setInputValue("");
        }}
      >
        Add Task
      </button>
    </>
  );
}

export default AddTask;
