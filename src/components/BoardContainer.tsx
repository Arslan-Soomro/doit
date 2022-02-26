import Board from "./Board";
import { useStore } from "./store";

const BoardContainer = () => {

  const boards = useStore((state) => state.boards);

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center px-6 justify-between">
        <h3 className="text-3xl font-black text-pclr-500">Boards</h3>
      </div>
      <div className="px-6">
        <hr className="my-2" />
      </div>
      <div className="px-6 pt-2 pb-4 w-full flex flex-wrap items-start justify-evenly gap-5">
        {
          boards.map((item, ind) => {
            return <Board key={ind} name={item.name} color={item.color} />
          })
        }
      </div>
    </div>
  );
};

export default BoardContainer;
