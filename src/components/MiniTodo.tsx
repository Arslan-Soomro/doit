import { useState } from "react";
import { TODO } from "../utils/customTypes";
import { useStore } from "./store";

const MiniTodo = ({ text, done } : {text: string, done: boolean}) => {

    const [isDone, setIsDone] = useState(done);
    const updateTodoState = useStore((state) => state.updateTodoState);

    const toggler = () => {
        setIsDone(!isDone);
        updateTodoState(text, isDone);
    }

    return(
        <button onClick={toggler} className={`p-2 border-b transition-colors w-full text-left ${isDone ? "bg-green-100 hover:bg-green-200" : "bg-white hover:bg-nclr-100"}`}>
            <p className="text-sm w-full text-left">{text}</p>
        </button>
    )
}

export default MiniTodo;