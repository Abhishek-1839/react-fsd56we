import axios from "axios";

const todoServices = {
    getTodos: async ()=>{
        return await instance.get("/todos");
    },
    postTodo : async(data) => {
        return await instance.post('/todos', data);
    }
}

export default todoServices;