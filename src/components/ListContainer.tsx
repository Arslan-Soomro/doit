import ColorDot from "./ColorDot";
import SmartTodosList from "./SmartTodosList";
import { useStore } from "./store";

const ListContainer = () => {
  const addTodoHandler = useStore((state) => state.addTodo);

  return (
    <>
      <div className="w-full flex items-center px-6 justify-between mt-4">
        <h3 className="text-3xl font-black text-pclr-500">Todos</h3>
        <div className="flex items-center space-x-2 mx-4">
          <ColorDot color="gray" />
          <p className="text-nclr-900">All</p>
        </div>
      </div>
      <div className="px-6">
        <hr className="my-2" />
      </div>
      <div className="overflow-y-scroll px-6 pb-4">
        <SmartTodosList />
        <div className="w-full relative flex items-center justify-end">
          <button
            onClick={addTodoHandler}
            className="border rounded-lg p-1 px-3 text-sclr-500 border-sclr-500 hover:bg-sclr-500 hover:text-white active:bg-sclr-600"
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default ListContainer;

//<div className="flex-1 px-6 py-4 overflow-hidden"></div>
