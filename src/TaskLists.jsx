import { useState } from "react";
import { handleState } from "./context/AppContext";
 
const TaskList = ({ task }) => {
  const { dispatch } = handleState();
  const [edit, setEdit] = useState(false);
  let content;

  if (edit) {
    content = (
      <>
        <input
          type="text"
          value={task.task}
          onKeyUp={(e) => {
            if (e.target.value != "") {
              e.key == "Enter" && setEdit(false);
            }
          }}
          onChange={(e) => {
            dispatch({
              type: "taskUpdate",
              data: {
                ...task,
                task: e.target.value,
              },
            });
          }}
        />

        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    content = (
      <>
        {task.task}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={(e) => {
          dispatch({
            type: "taskUpdate",
            data: {
              ...task,
              checked: e.target.checked,
            },
          });
        }}
      />
      {content}
      <button onClick={() => dispatch({ type: "taskDelete", id: task.id })}>
        Delete
      </button>
    </>
  );
};

function TaskLists() {
  const { state } = handleState();

  return (
    <ul>
      {state.taskList.map((el) => (
        <li key={el.id}>
          <TaskList task={el} />
        </li>
      ))}
    </ul>
  );
}

export default TaskLists;
