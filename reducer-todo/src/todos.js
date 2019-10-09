import React, { useReducer } from "react";

const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];
const initialState = {
  todos: initialTodoState,
  addTodo: ""
};

const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const ON_SUBMIT = "ON_SUBMIT";
const ON_COMPLETE = "ON_COMPLETE";
const ON_CLEAR_COMPLETED = "ON_CLEAR_COMPLETED";

function reducer(state, action) {
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
        addItem: ""
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

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onchangeInput = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: { [event.target.name]: event.target.value }
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch({
      type: ON_SUBMIT
    });
  };
  const onComplete = (id, complete) => event => {
    event.preventDefault();
    dispatch({
      type: ON_COMPLETE,
      payload: { id, complete }
    });
  };
  const onClearCompleted = () => {
      dispatch({
          type: ON_CLEAR_COMPLETED
      })
  }

  return (
    <div>
      <div className="addtask">
        <input
          name="addTodo"
          onChange={onchangeInput}
          value={state.addTodo}
          type="text"
        />
        <button className="add_task_btn" onClick={onSubmit}>Add Task</button>
      </div>
      <div className="todos">
        {state.todos.map(item => (
          <p key={item.id}>
            {item.item}
            <button className="complete_btn" onClick={onComplete(item.id, true)}>Complete</button>
            <button className="not_complete_btn" onClick={onComplete(item.id, false)}>Not Complete</button>
            
          </p>
        ))}
      </div>
        <div>
            <button className="clear_cpt_btn" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    </div>
  );
}