import create from "zustand";
import { STORE, TODO } from "../utils/customTypes";

const initialBoard = {
  //This one should be here by default, and at 0th index
  name: 'Inbox',
  color: '#1D4ED8',
};

const defaultTodo: TODO = {
  text: 'I want to ',
  done: false,
  attachedBoard: initialBoard, //change this to current board when adding it
};

export const useStore = create<STORE>((set, get) => ({
  todos: [
    {
      text: "Do your laundry",
      done: false,
      attachedBoard: initialBoard
    },
    {
      text: "Do your homework",
      done: false,
      attachedBoard: initialBoard
    },
    {
      text: "Do your Job",
      done: false,
      attachedBoard: initialBoard
    },
  ],
  boards: [
    initialBoard,
    {
      name: 'Study',
      color: 'green',
    },
    {
      name: 'Work',
      color: 'purple',
    }
  ],
  highlight: "set a daily highlight",
  currentBoard: initialBoard,
  addTodo: () => {
    set((state) => ({ todos : [...state.todos, {...defaultTodo, attachedBoard: get().currentBoard}]}));
  },
  updateTodoText: (prevText, newText) => {
    let tempTodos = get().todos;
    const editTodoInd = tempTodos.findIndex((item) => item.text == prevText);
    if(editTodoInd != -1){
      tempTodos[editTodoInd].text = newText;
      set((state) => ({todos: tempTodos}));
    }
  },
  updateTodoState: (prevText, newState) => {
    let tempTodos = get().todos;
    const editTodoInd = tempTodos.findIndex((item) => item.text == prevText);
    if(editTodoInd != -1){
      tempTodos[editTodoInd].done = newState;
      set((state) => ({todos: tempTodos}));
    }
  },
  deleteTodo: (text) => {
    set((state) => ({ todos : state.todos.filter((item) => item.text != text)}));
  },
  updateHighlight: (text) => {
    set(() => ({highlight: text}));
  },
  addBoard: (newBoard) => {
    set((state) => ({boards: [...state.boards, newBoard]}))
  },
  switchBoard: (toBoard) => {
    set(() => ({currentBoard: toBoard}));
  },
  deleteBoard: (name) => {
    //Delets Board as well as attached todos, and switches to inbox board
    set((state) => ({
      boards: state.boards.filter((item) => item.name != name),
      todos: state.todos.filter((item) => item.attachedBoard.name != name),
      currentBoard: state.boards[0],
    }));
  }
}));