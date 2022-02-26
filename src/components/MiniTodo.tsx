import { useState } from "react";
import { TODO } from "../utils/customTypes";
import { useStore } from "./store";

const MiniTodo = ({ text, done } : {text: string, done: boolean}) => {
    // TODO done prop is no longer needed, safely remove it.

    //TODO
    //Setting isDone through state just didn't update state, so we directtly update and change from update
    //Use immer, maybe its because of shallow checking that re-renders didn't happen, but with immer it might be possibel

    //const [isDone, setIsDone] = useState(done);
    const getInfo = useStore((state) => state.getTodoByText);
    const isDone = getInfo(text)?.done;
    const updateTodoState = useStore((state) => state.updateTodoState);

    const toggler = () => {
        //const newState = !isDone;
        //setIsDone(newState);
        updateTodoState(text, !isDone);

    }

    return(
        <button onClick={toggler} className={`p-2 border-b transition-colors w-full text-left ${isDone ? "bg-green-100 hover:bg-green-200" : "bg-white hover:bg-nclr-100"}`}>
            <p className="text-sm w-full text-left">{text}</p>
        </button>
    )
}

export default MiniTodo;