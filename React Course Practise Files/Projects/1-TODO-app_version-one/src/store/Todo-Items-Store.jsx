import { createContext, useReducer } from "react";

export const Todo_Store = createContext({
  todoItems: [],
  addNew: () => {},
  deleteOld: () => {},
});
const todoItemsReducer = (currtentTodoItems, action) => {
  let newTodoItems;
  if (action.type === "NEW_ITEMS") {
    newTodoItems = [
      ...currtentTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEMS") {
    newTodoItems = currtentTodoItems.filter(
      (item) => item.name != action.payload.itemname
    );
  }
  return newTodoItems;
};
const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNew = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEMS",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteOld = (itemname) => {
    const deleteItems = {
      type: "DELETE_ITEMS",
      payload: {
        itemname,
      },
    };
    dispatchTodoItems(deleteItems);
  };
  return (
    <Todo_Store.Provider value={{ todoItems, addNew, deleteOld }}>
      {children}
    </Todo_Store.Provider>
  );
};
export default TodoContextProvider;
