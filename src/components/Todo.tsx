import {
  ChevronDownIcon,
  ChevronUpIcon,
  EyeIcon,
  LightBulbIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useState, useRef, useEffect } from "react";
import { TODO } from "../utils/customTypes";
import { useStore } from "./store";
import Tooltip from "./Tooltip";

const Todo = ({ done, text, attachedBoard }: TODO) => {
  //done prop is used to set default state and as well as pass new state to ancestor

  const deleteTodoHandler = useStore((state) => state.deleteTodo);
  const updateHighlightHandler = useStore((state) => state.updateHighlight);

  const [isChecked, setIsChecked] = useState(done ? true : false); //checked if todo is done otherwise unchecked
  const [isExpanded, setIsExpanded] = useState(false); //For mobile view only
  const [isEditable, setIsEditable] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);

  //TODO Update state too.
  //FIXME delete is not working right, fix it.

  useEffect(() => {
    if (isEditable) {
      if (textRef.current) textRef.current.focus();
    }
  }, [isEditable]);

  const toggler = () => {
    const newVal = isChecked ? false : true;
    done = newVal;
    setIsChecked(newVal);
  };

  const iconsBar = (
    <>
      <button onClick={() => setIsEditable(true)}>
        <Tooltip text="Edit">
          <PencilIcon className="w-5 h-5 hover:text-pclr-500 active:text-pclr-700" />
        </Tooltip>
      </button>
      <button>
        <Tooltip text="Focus">
          <EyeIcon className="w-5 h-5 hover:text-pclr-500 active:text-pclr-700" />
        </Tooltip>
      </button>
      <button
        onClick={() => {
          if (textRef.current)
            updateHighlightHandler(textRef.current.innerText);
        }}
      >
        <Tooltip text="Highlight">
          <LightBulbIcon className="w-5 h-5 hover:text-pclr-500 active:text-pclr-700" />
        </Tooltip>
      </button>
      <button
        onClick={() => {
          if (textRef.current) deleteTodoHandler(textRef.current.innerText);
        }}
      >
        <Tooltip text="Delete">
          <TrashIcon className="w-5 h-5 hover:text-red-500 active:text-red-700" />
        </Tooltip>
      </button>
    </>
  );

  return (
    <div className="p-4 w-full border rounded-lg my-4">
      <div className=" w-full flex justify-between items-center">
        <div className="cursor-pointer flex justify-start w-full items-center space-x-3">
          {/* Checkbox */}
          <input
            className="w-5 h-5"
            type="checkbox"
            checked={isChecked}
            onChange={toggler}
          />

          {/* Text */}
          <p
            onBlur={() => setIsEditable(false)}
            onClick={() => {
              if (!isEditable) toggler();
            }}
            ref={textRef}
            className={`text-nclr-700 ${
              isChecked ? "line-through" : ""
            } cursor-pointer w-full break-all pr-2 focus-visible:outline-none`}
            contentEditable={isEditable}
          >
            {text}
          </p>
        </div>
        <button className="w-fit text-nclr-700 block sm:hidden">
          {isExpanded ? (
            <ChevronUpIcon
              onClick={() => setIsExpanded(false)}
              className="w-5 h-5 hover:text-pclr-500 active:text-pclr-700"
            />
          ) : (
            <ChevronDownIcon
              onClick={() => setIsExpanded(true)}
              className="w-5 h-5 hover:text-pclr-500 active:text-pclr-700"
            />
          )}
        </button>
        {/* Icons show in desktop view, but in mobile view they are hidden but can only be seen by expanding them */}
        <div className="hidden justify-center items-center sm:flex space-x-3 text-nclr-700">
          {iconsBar}
        </div>
      </div>
      {isExpanded ? (
        <div className="sm:hidden mt-3 flex justify-end items-center space-x-3 text-nclr-700">
          {iconsBar}
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
