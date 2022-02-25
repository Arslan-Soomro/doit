import { TODO } from "../utils/customTypes";
import Todo from "./Todo";

interface props{
    todos: TODO[];
}

const TodosList = ({ todos } : props) => {
  return (
    <div className="w-full overflow-x-hidden container">
        {todos.map((item, ind) =>  (<Todo key={ind} text={item.text} done={item.done} />))}
    </div>
  );
};

export default TodosList;
