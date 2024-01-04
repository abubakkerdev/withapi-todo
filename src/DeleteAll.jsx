import { handleState } from "./context/AppContext";

function DeleteAll() {
  const { state, dispatch } = handleState();

  return (
    <>
      <input
        type="checkbox"
        checked={state.checkedAll}
        onChange={(e) =>
          dispatch({ type: "taskAllCheck", data: e.target.checked })
        }
      />

      <button onClick={() => dispatch({ type: "taskAllDelete" })}>
        Delete All
      </button>
    </>
  );
}

export default DeleteAll;
