import { TrashIcon } from "@heroicons/react/outline";
import { BOARD } from "../utils/customTypes";
import ColorDot from "./ColorDot";
import { useStore } from "./store";

interface props extends BOARD {
  disableDel: boolean;
  btnClickHandler: Function
}

const SidebarItem = ({ name, color, disableDel, btnClickHandler }: props) => {
  const switchBoard = useStore((state) => state.switchBoard);
  const deleteBoard = useStore((state) => state.deleteBoard);

  const clickHandler = () => {
    btnClickHandler();
    switchBoard({ name, color });
  };

  const delHandler = () => {
    deleteBoard(name);
  };

  return (
    <div className="cursor-pointer hover:bg-nclr-100 py-2 px-2 rounded-md flex justify-between items-center space-x-3 active:bg-nclr-200">
      <div
        onClick={clickHandler}
        className=" w-full flex items-center justify-start space-x-3"
      >
        <ColorDot color={color} />
        <p className="text-nclr-700 text-lg">{name}</p>
      </div>
      {disableDel ? null : (
        <button
          onClick={delHandler}
          className="text-nclr-700 hover:text-red-500 active:text-red-600"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SidebarItem;
