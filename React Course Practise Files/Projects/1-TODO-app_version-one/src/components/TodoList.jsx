import { useContext } from "react";
import { Todo_Store } from "../store/Todo-Items-Store";

function TodoList({ name, dueDate }) {
  const { deleteOld } = useContext(Todo_Store);
  return (
    <>
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteOld(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoList;
