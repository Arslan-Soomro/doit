import create from "zustand";
import { STORE, TODO } from "../utils/customTypes";

const defaultTodo: TODO = {
    text: 'I want to ',
    done: false,
}

export const useStore = create<STORE>((set, get) => ({
  todos: [
    {
      text: "Do your laundry",
      done: false,
    },
    {
      text: "Do your homework",
      done: false,
    },
    {
      text: "Do your Job",
      done: false,
    },
  ],
  highlight: "set a daily highlight",
  addTodo: () => {
    set((state) => ({ todos : [...state.todos, defaultTodo]}));
  },
  deleteTodo: (text) => {
    
  },
  updateHighlight: (text) => {
    set((state) => ({highlight: text}));
  }
}));