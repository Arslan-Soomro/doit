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
    <div className="border rounded-lg w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] overflow-hidden">
      <div
        className="border-b text-sm sm:text-base px-2 sm:px-4 py-2 text-white w-full"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
      {todos.length > 0 ?
      <div className="w-full h-full overflow-y-auto">
        {todos.map((item, ind) => {
          return <MiniTodo key={ind} text={item.text} done={item.done} />;
        })}
      </div> : <div className="h-full w-full flex justify-center py-5 text-nclr-700">Empty Board</div>}
    </div>
  );
};

export default Board;
