import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
  <div className="border-r h-full w-full">
    <div className="p-2 mb-2 ">
      <h4 className="bg-pclr-500 shadow-lg shadow-blue-200 rounded-lg text-3xl font-black text-center py-4 text-white underline">Do it!</h4>
    </div>
    <div className="px-4">
      <SidebarItem name="Boards" />
      
      <div className="ml-4 mt-1 border-l pl-1">
        <SidebarItem name="All" color="gray" />
        <SidebarItem name="Study" color="#195492" />
        <SidebarItem name="Work" color="#523491"  />
      </div>

      <button className=" my-4 p-2 rounded-lg w-full border border-pclr-500 text-pclr-500 hover:text-white hover:bg-pclr-500 active:bg-pclr-600">Add Board</button>
    </div>
    
  </div>);
};

export default Sidebar;
