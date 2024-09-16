import { useContext } from "react";
import TodoList from "./TodoList";
import { Todo_Store } from "../store/Todo-Items-Store";
const TodoItems = ({}) => {
  const { todoItems } = useContext(Todo_Store);
  return (
    <>
      <div className="container text-center">
        {todoItems.map((item) => (
          <TodoList
            key={item.name}
            name={item.name}
            dueDate={item.dueDate}
          ></TodoList>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
