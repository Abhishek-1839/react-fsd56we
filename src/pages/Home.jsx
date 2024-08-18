import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import todoServices from "../services/todoServices";

const Home = () => {

  const [newTodo, setNewTodo] = useState('');
  const [status, setStatus] = useState(false)
  const navigate = useNavigate();

  const todos = useLoaderData();

  const handleAddTodo = async (e) => {
    e.preventDefault();
    // make a POST request to the server
    todoServices.postTodo({
      description: newTodo,
      status: status
    })
      .then(response => {
        alert('Todod added');

        setNewTodo('');
        setStatus(false);

        // reload the todos
        navigate('/');
      })
      .catch(error => {
        alert('Failed to add');
      });

    console.log('Add Todo')
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos.map(todo => (
            <li key={todo._id}>
              {todo.description}
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleAddTodo}>
        <input type="text"
          placeholder="Add Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} />

        <select
          value={{ status }}
          onChange={(e) => { setStatus(e.target.value) }}>

          <option>False</option>
          <option>TRue</option>

        </select>

        <button type="submit">Add Todo</button>


      </form>
    </div>
  )
}

export default Home;