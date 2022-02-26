import { TODO } from "../utils/customTypes";
import MiniTodo from "./MiniTodo";
import { useStore } from "./store";

interface props {
  name: string;
  color: string;
}

const Board = ({ name, color }: props) => {
  const todos = useStore((state) => state.todos).filter(
    (item) => (item.attachedBoard.name == name)
  );

  return (
    <div className="border rounded-lg w-[250px] h-[200px] overflow-hidden">
      <div
        className="border-b px-4 py-2 w-full"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
      <div className="text-sm w-full h-full overflow-y-auto">
        {todos.map((item, ind) => {
          return <MiniTodo key={ind} text={item.text} done={item.done} />;
        })}
      </div>
    </div>
  );
};

export default Board;
