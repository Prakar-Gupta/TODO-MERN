import axios from "axios";

export const createTask = async (task: string, complete: boolean) => {
    try {
        const randomNumber = Math.floor(Math.random() * 10000);
        const id: string = `${randomNumber}`;
        console.log(id)
        const data = {
            id: id,
            task: task,
            complete: complete,
        };

        await axios.post('http://localhost:8001/api/createtask', data);
    }
    catch (err) {
        console.log(err)
    }
}

export const getTasks = async () => {
    try {
        const response = await axios.get('http://localhost:8001/api/gettasks');
        const tasks = response.data;
        // Do something with the tasks
    } catch (err) {
        console.log(err);
    }
};


export const updateTask = async (id: string, task: string) => {
    try {
        const data = {
            id: id,
            task: task
        }
        await axios.put('http://localhost:8001/api/updatetask', data)
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteTask = async (id: string) => {
    try {
        const config = {
            data: {
                id: id
            }
        };
        await axios.delete(`http://localhost:8001/api/deletetask`, config)
    }
    catch (err) {
        console.log(err)
    }
}