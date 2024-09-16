import AppName from "./components/Appname";
import Inputs from "./components/Inputs";
import TodoItems from "./components/TodoItems";
import EmptyList from "./components/NoTodoListMsg";
import TodoContextProvider from "./store/Todo-Items-Store";

function App() {
  return (
    <TodoContextProvider>
      <center>
        <AppName></AppName>
        <Inputs></Inputs>
        <EmptyList></EmptyList>
        <TodoItems></TodoItems>
      </center>
    </TodoContextProvider>
  );
}

export default App;
