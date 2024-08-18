import axios from "axios";

const todoServices = {
    getTodos: async ()=>{
        return await instance.get("/todos");
    }


}

export default todoServices;