import AddTodoModal from "./components/AddTodoModal";
import Backdrop from "./components/Backdrop";
import ColorDot from "./components/ColorDot";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import Sidebar from "./components/Sidebar";
import SmartTodosList from "./components/SmartTodosList";
import { useStore } from "./components/store";

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

  //TODO app is not responsive

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
            <div className="flex-1 py-4 overflow-hidden" >
              <ListContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
