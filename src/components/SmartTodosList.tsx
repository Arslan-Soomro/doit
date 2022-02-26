import TodosList from "./TodosList";
import { useStore } from "./store";

const SmartTodosList = () => {

    let todos = useStore((state) => state.todos);
    const currentBoard = useStore((state) => state.currentBoard);
    todos = todos.filter((item) => {return item.attachedBoard.name == currentBoard.name});

    return(
        <TodosList todos={todos} />
    )   
}

export default SmartTodosList;