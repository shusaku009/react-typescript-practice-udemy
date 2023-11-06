import React from 'react';
import axios from "axios";
import { useState } from "react";
import './App.css';
import { Todo } from './Todo';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
