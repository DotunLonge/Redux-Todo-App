export function AddTodo(newTodo){
    return {
        type: "ADD_TODO",
        data: newTodo
    }
}

export function RemoveTodo(id){
    return {
        type: "REMOVE_TODO",
        data: id
    }
}