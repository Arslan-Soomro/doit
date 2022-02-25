import TodosList from "./TodosList";
import { useStore } from "./store";

const SmartTodosList = () => {

    const todos = useStore((state) => state.todos);

    return(
        <TodosList todos={todos} />
    )   
}

export default SmartTodosList;