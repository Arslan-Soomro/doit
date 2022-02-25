import AddTodoModal from "./components/AddTodoModal";
import Backdrop from "./components/Backdrop";
import ColorDot from "./components/ColorDot";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
import TodosList from "./components/TodosList";
import { TODO } from "./customTypes";

const tList: TODO[] = [
  {
    text: "Do your laundry",
    done: false,
  },
  {
    text: "Do your homework",
    done: false,
  },
];

function App() {
  //TODO add Modals
  //TODO set state using zustand
  //TODO Save Todos to local Storage
  //TODO Add Focus Mode
  //TODO make a todo Daily Highlight
  //TODO Add a category
  //TODO Switch To a category and show its todos only
  //TODO add Board View
  //TODO Add Animations

  return (
    <>
    <div className="App w-full h-full font-pf">
      <div className="w-full h-full flex">
        <div className="w-[260px] hidden sm:block">
          <Sidebar />
        </div>
        <div className="flex-1 flex h-full flex-col">
          <div className="p-4 h-[180px]">
            <Header />
          </div>
          <div className="flex-1 px-6 py-4">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-3xl font-black text-pclr-500">Todos</h3>
              <div className="flex items-center space-x-2 mx-4">
                <ColorDot color="gray" />
                <p className="text-nclr-900">All</p>
              </div>
            </div>
            <hr className="my-2" />
            <TodosList todos={tList} />
            <div className="w-full relative flex items-center justify-end">
              <button className="border rounded-lg p-1 px-3 text-sclr-500 border-sclr-500 hover:bg-sclr-500 hover:text-white active:bg-sclr-600">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
