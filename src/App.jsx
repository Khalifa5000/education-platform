import { useState } from 'react'
import Nav from './components/nav/Nav.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="counter">
        <h1>Educational Platform</h1>
        
      </div>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed quod amet cupiditate distinctio repellat ea adipisci, magni officiis, saepe, earum atque eius ratione architecto pariatur. Beatae maxime dolores esse!
        Laboriosam non neque aperiam eligendi, aspernatur deleniti obcaecati reprehenderit odio officiis tempora nobis temporibus earum aut cum minima perferendis fugiat facilis alias sit! Pariatur corporis minus deserunt vero quae! Consequatur!
        Cum quae illo necessitatibus magnam tempore recusandae blanditiis, debitis sit corporis sed neque ducimus corrupti maxime quaerat accusamus alias sint tenetur vitae labore eos libero! Voluptates soluta culpa expedita.
        </span>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
    </>
  )
}

export default App
