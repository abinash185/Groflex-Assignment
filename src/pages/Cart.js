// src/pages/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>My Cart</h1>
      <ul style={{textAlign : 'center'}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - Quantity: {todo.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
