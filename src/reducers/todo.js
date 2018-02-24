import initialState from '../initialState';

const Todo = (state = initialState, payload)=>{
    switch(payload.type){
        case "ADD_TODO":
        return {...state, todos: [...state.todos, payload.data] }
        
        case "REMOVE_TODO": 
        const newTodoState =  state.todos.filter(todo => todo !== payload.data);
        if(newTodoState.length > 0){
            return {...state, todos: newTodoState}
        }else{
            return state;
        }
        default: 
        return state;
    }
}

export default Todo;