import {useState, useEffect} from "react";

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupactive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
      GetTodos();
      console.log(todos);
  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(err => console.error("Error", err));
  }
  return (
    <div className="App">
       <h1>Welcome to the TODO list</h1>
        <div className="todos">
          {todos.map(todo => {
              <div className="todo">
              <div className="checkbox"></div>
  
              <div className="text">{todo.text}</div>
              <div className="delete-todo"></div>
  
            </div>
          })}
          
        </div>
    </div>
  );
}

export default App;
