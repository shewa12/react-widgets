const initialState = [
    {
        id: 1,
        title: 'Dummy todo',
        completed: false,
    }
];

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

function todosReducer (state = initialState, action) {
    switch (action.type) {
        case 'todos/added':
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    title: action.payload.title,
                    completed: action.payload.completed
                }
            ];
        case 'todos/delete':
            const items = state.filter(todo => {
                if (todo.id != action.payload) {
                    return true;
                }
            });
            
            return items;
        case 'todos/toggled': // handle complete or incomplete
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
        
                return {
                ...todo,
                completed: !todo.completed
                }
            })
        default:
            return state;
    }
}

export default todosReducer;