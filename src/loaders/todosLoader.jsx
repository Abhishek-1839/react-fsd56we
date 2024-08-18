
import todoServices from "../services/todoServices";
const todosLoader = async () => {
const response = await todoServices.getTodos();

return response.data.todos;
}

export default todosLoader;