import AddTask from "./AddTask";
import TaskLists from "./TaskLists";
import DeleteAll from "./DeleteAll";
import { handleState } from "./context/AppContext";
 
function App() {
  const { state } = handleState();

  return (
    <>
      {state.error ? (
        <h2>{state.error.message}</h2>
      ) : (
        <div>
          <DeleteAll />
          <br /> <br />
          <AddTask />
          <TaskLists />
        </div>
      )}
    </>
  );
}

export default App;
