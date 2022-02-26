import { XIcon } from "@heroicons/react/outline";

interface props {
    closeHandler: () => void;
}

const AddBoardModal = ({ closeHandler } : props) => {
  return (
    <div className="border bg-white w-[400px] rounded-lg font-pf overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b text-nclr-700">
        <p>Add Board</p>
        <button onClick={closeHandler} className="cursor-pointer hover:text-nclr-800 active:text-nclr-900">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full p-4">
        <label className="">
          <p className="text-sm text-nclr-700">Board Name</p>
          <input type="text" className="border border-nclr-400 focus:border-pclr-500 w-full py-2 px-4 rounded-lg my-2" placeholder="Enter Name" />
        </label>
        <label className="flex items-center space-x-3">
          <p className="text-sm text-nclr-700">Choose Color</p>
          <input type="color" defaultValue="#DDA0DD" className="my-2 rounded-full w-5 h-5 overflow-hidden" />
        </label>
      </div>
      <div className="border-t  w-full">
        <button className="p-3 text-center w-full hover:bg-nclr-100 active:bg-nclr-200">Add</button>
      </div>
    </div>
  );
};

export default AddBoardModal;
