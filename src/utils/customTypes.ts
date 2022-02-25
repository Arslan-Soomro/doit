
export type TODO = {
    text: string;
    done: boolean;
}

export type STORE = {
    todos: TODO[];
    highlight: string;
    addTodo: () => void;
    deleteTodo: (text: string) => void;
    updateHighlight: (text: string) => void;
}