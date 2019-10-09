export const initialTodoState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ];
  export const initialState = {
    todos: initialTodoState,
    addTodo: ""
  };
  
  export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
  export const ON_SUBMIT = "ON_SUBMIT";
  export const ON_COMPLETE = "ON_COMPLETE";
  export const ON_CLEAR_COMPLETED = "ON_CLEAR_COMPLETED";
  
  export function reducer(state, action) {
    switch (action.type) {
      case ON_INPUT_CHANGE:
        return { ...state, ...action.payload };
      case ON_SUBMIT:
        return {
          ...state,
          todos: state.todos.concat({
            item: state.addTodo,
            completed: false,
            id: Date.now()
          }),
          addTodo: ""
        };
      case ON_COMPLETE:
        return { ...state, todos: state.todos.map(todo => {
          if (action.payload.id !== todo.id) {
            return todo;
          } return {...todo, completed: action.payload.complete}
        })};
      case ON_CLEAR_COMPLETED:
        let clearTodos = state.todos.filter(item => !item.completed)
        return {
            ...state,
            todos: [...clearTodos]
        }
      default:
        return state;
    }
  }