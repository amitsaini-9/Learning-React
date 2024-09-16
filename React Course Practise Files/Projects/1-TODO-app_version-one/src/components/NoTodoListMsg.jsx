import { useContext } from "react";
import styles from "./NoTodoListMsg.module.css";
import { Todo_Store } from "../store/Todo-Items-Store";
const EmptyList = () => {
  const { todoItems } = useContext(Todo_Store);
  return (
    todoItems.length === 0 && (
      <p className={`${styles.errormsg}`}>Todo List is Empty ! Nothing Todo</p>
    )
  );
};
export default EmptyList;
