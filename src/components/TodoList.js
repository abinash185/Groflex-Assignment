// src/components/TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2 style={{textAlign : 'center'}}>TODO List</h2>
      <ul style={{textAlign:'center'}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - Quantity: {todo.quantity}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
