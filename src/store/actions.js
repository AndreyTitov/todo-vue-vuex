export const addToDo = ( {commit}, todo ) => {
    commit('ADD_TO_DO', todo)
};

export const deleteToDo = ( {commit}, todo ) => {
    commit('DELETE_TO_DO', todo)
}