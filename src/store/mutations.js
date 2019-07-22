export const ADD_TO_DO = (state, todo) => {
    state.todos.push(todo);
};

export const DELETE_TO_DO = (state, todo) => {
    state.todos = state.todos.filter(t => {
        console.log(todo.id);

        if(t.id !== todo.id) {
            return t
        }
    });
}