import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";

function App() {

  //TODO make it responsive

  return (
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
            <h3 className="text-3xl font-black text-pclr-500">Todos</h3>
            <hr className="my-2" />
            <div className="w-full overflow-x-hidden">
              <Todo text="Do your laundry" done={true} />
              <Todo text="do your homework" done={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
