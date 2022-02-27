
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
    setTodos: (newTodos: TODO[]) => void;
    boards: BOARD[];
    setBoards: (newBoards: BOARD[]) => void;
    highlight: string;
    currentBoard: BOARD;
    switchBoard: (toBoard: BOARD) => void;
    addTodo: () => void;
    getTodoByText: (text: string) => TODO | undefined;
    updateTodoText: (prevtext: string, newText: string) => void;
    updateTodoState: (prevtext: string, newState: boolean) => void;
    deleteTodo: (text: string) => void;
    addBoard: ({name, color} : BOARD) => void;
    updateHighlight: (text: string) => void;
    deleteBoard: (name: string) => void;
}