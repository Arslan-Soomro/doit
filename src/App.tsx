import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import AddBoardModal from "./components/AddBoardModal";
import Backdrop from "./components/Backdrop";
import BoardContainer from "./components/BoardContainer";
import ColorDot from "./components/ColorDot";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import Sidebar from "./components/Sidebar";
import SmartTodosList from "./components/SmartTodosList";
import { useStore } from "./components/store";
import useStorage from "./components/useStorage";

function App() {
  //TODO Add Focus Mode
  //TODO Add Animations

  const todos = useStore((state) => state.todos);
  const boards = useStore((state) => state.boards);
  const highlight = useStore((state) => state.highlight);
  const setTodos = useStore((state) => state.setTodos);
  const setBoards = useStore((state) => state.setBoards);
  const updateHighlight = useStore((state) => state.updateHighlight);

  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isBoardOpen, setIsBoardOpen] = useState(true);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const initData = (resData: string | null) => {
    const loadedData = resData != null ? JSON.parse(resData) : null;

    if (
      loadedData != null &&
      typeof loadedData === "object" &&
      loadedData.todos &&
      loadedData.boards
    ) {
      setBoards(loadedData.boards);
      setTodos(loadedData.todos);
      if(highlight != null && highlight.length > 0) updateHighlight(loadedData.highlight); //To prevent loading empty highlights
    }

    setIsDataLoaded(true);
  };

  const [storage, setStorage] = useStorage("APP_DATA", initData);

  useEffect(() => {
    if (isDataLoaded) {
      setStorage(
        JSON.stringify({
          todos,
          boards,
          highlight
        })
      );
    }
  }, [todos, boards, highlight]);

  return (
    <>
      <button
        onClick={() => setIsSideOpen(!isSideOpen)}
        className="block md:hidden absolute z-50 bottom-8 left-8 rounded-full bg-pclr-500 text-white shadow-lg shadow-pclr-200 p-3"
      >
        {isSideOpen ? (
          <ChevronLeftIcon className="w-5 h-5" />
        ) : (
          <ChevronRightIcon className="w-5 h-5" />
        )}
      </button>
      <div className="App w-full h-full font-pf">
        <div className="w-full h-full flex">
          <div
            className={`w-[260px] transition-all duration-500 h-full absolute md:static md:block ${
              isSideOpen ? "left-0 top-0" : "-left-full"
            }`}
          >
            <Sidebar setBoardOpen={setIsBoardOpen} />
          </div>
          <div className="flex-1 flex h-full w-full flex-col">
            <div className="p-4 h-[150px] sm:h-[180px]">
              <Header />
            </div>
            <div className="flex-1 py-4 overflow-y-auto">
              {isBoardOpen ? <BoardContainer /> : <ListContainer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
