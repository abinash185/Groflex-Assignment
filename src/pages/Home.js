// src/pages/Home.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';
import '../styles.css'; // Import the CSS file

const Home = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddTodo = () => {
    dispatch(addTodo({ text: todoText, quantity }));
    setTodoText('');
    setQuantity(1);
  };

  return (
    <div className="home-container">
      <div className="home-form">
        <h1>Add to Cart</h1>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Todo text"
          className="home-input"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="home-quantity"
        />
        <button onClick={handleAddTodo} className="home-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
