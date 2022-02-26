
export type BOARD = {
    name: string;
    color: string;
}

export type TODO = {
    text: string;
    done: boolean;
    attachedBoard: BOARD
}

export type STORE = {
    todos: TODO[];
    boards: BOARD[];
    highlight: string;
    currentBoard: BOARD;
    switchBoard: (toBoard: BOARD) => void;
    addTodo: () => void;
    updateTodoText: (prevtext: string, newText: string) => void;
    updateTodoState: (prevtext: string, newState: boolean) => void;
    deleteTodo: (text: string) => void;
    addBoard: ({name, color} : BOARD) => void;
    updateHighlight: (text: string) => void;
    deleteBoard: (name: string) => void;
}