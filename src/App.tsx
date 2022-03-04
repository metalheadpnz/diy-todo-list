import React, {useState} from 'react';
import './App.css';

function App() {
  const [todoLists, setTodoLists] = useState([
      {

      }])

  return (
    <div>
      <div>TodoList Title</div>
        <input type="text"/>
        <button>+</button>

    </div>
  );
}

export default App;
