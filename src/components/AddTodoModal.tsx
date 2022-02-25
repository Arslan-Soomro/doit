import { XIcon } from "@heroicons/react/outline";


const AddTodoModal = () => {
    return(
        <div className="border bg-white w-[400px] rounded-lg font-pf">
            <div className="flex justify-between items-center px-4 py-3 border-b">
                <p>Title</p>
                <XIcon className="w-5 h-5" />
            </div>
            <div className="w-full p-4">
                <label>
                    <p>Todo Name</p>
                </label>
            </div>
            <div className="border-t w-full">
                <button className="p-3 text-center w-full">Add</button>
            </div>
        </div>
    )
};

export default AddTodoModal;