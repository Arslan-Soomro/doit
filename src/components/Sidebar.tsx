import { useState } from "react";
import AddBoardModal from "./AddBoardModal";
import Backdrop from "./Backdrop";
import SidebarItem from "./SidebarItem";
import { useStore } from "./store";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const boards = useStore((state) => state.boards);

  return (
    <>
      {isModalOpen ? (
        <Backdrop>
          <AddBoardModal closeHandler={() => setIsModalOpen(false)} />
        </Backdrop>
      ) : null}
      <div className="border-r h-full w-full bg-white">
        <div className="p-2 mb-2 ">
          <h4 className="bg-pclr-500 shadow-lg shadow-blue-200 rounded-lg text-3xl font-black text-center py-4 text-white underline">
            Do it!
          </h4>
        </div>
        <div className="px-4">
          <button className="p-3 text-left text-nclr-700 text-lg hover:bg-nclr-100 active:bg-nclr-200 w-full rounded-lg">
            Boards
          </button>

          <div className="ml-4 mt-1 border-l pl-1">
            {boards.map((item, ind) => (
              <SidebarItem key={ind} name={item.name} color={item.color} disableDel={ind == 0} />
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className=" my-4 p-2 rounded-lg w-full border border-pclr-500 text-pclr-500 hover:text-white hover:bg-pclr-500 active:bg-pclr-600"
          >
            Add Board
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
