import { useContext, useRef } from "react";
import style from "./Inputs.module.css";
import { Todo_Store } from "../store/Todo-Items-Store";
function Inputs() {
  const { addNew } = useContext(Todo_Store);
  const tname = useRef();
  const tdate = useRef();

  const handleAddButton = () => {
    const name = tname.current.value;
    const date = tdate.current.value;
    tname.current.value = "";
    tdate.current.value = "";
    addNew(name, date);
  };
  return (
    <div className={`container text-center ${style.inputContainer}`}>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO here" ref={tname} />
        </div>
        <div className="col-4">
          <input type="date" ref={tdate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Inputs;
