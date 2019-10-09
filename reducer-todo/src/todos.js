import React, { useReducer } from "react";
import {initialState, reducer, ON_CLEAR_COMPLETED, ON_COMPLETE, ON_INPUT_CHANGE, ON_SUBMIT} from './reducers/todosReducer';

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