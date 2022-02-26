import { PlusIcon } from "@heroicons/react/outline";
import ColorDot from "./ColorDot";
import SmartTodosList from "./SmartTodosList";
import { useStore } from "./store";

const ListContainer = () => {
  const addTodoHandler = useStore((state) => state.addTodo);
  const currentBoard = useStore((state) => state.currentBoard);

  return (
    <>
      <div className="w-full flex items-center px-6 justify-between">
        <h3 className="text-3xl font-black text-pclr-500">Todos</h3>
        <div className="flex items-center space-x-2 mx-4">
          <ColorDot color={currentBoard.color} />
          <p className="text-nclr-900">{currentBoard.name}</p>
        </div>
      </div>
      <div className="px-6">
        <hr className="my-2" />
      </div>
      <div className="px-6 pb-4 container">
        <SmartTodosList />

          <button
            onClick={addTodoHandler}
            className="flex justify-center border-2 border-dashed border-sclr-100 text-sclr-200 p-3 w-full rounded-lg"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        
      </div>
    </>
  );
};

export default ListContainer;

//<div className="flex-1 px-6 py-4 overflow-hidden"></div>
