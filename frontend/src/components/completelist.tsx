import { useState, useEffect } from 'react';
import { ReactComponent as Tick } from "../Assets/Tick.svg";
import axios from 'axios';

interface Task {
    id: string;
    task: string;
    complete: boolean;
    uploadDate: string;
    __v: number;
}

function Completetask() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8001/api/gettasks');
            const completedTasks = response.data.filter((task: Task) => task.complete);
            setTasks(completedTasks);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (taskId: string, task: string) => {
        // Handle editing logic here
    };

    const handleDelete = async (taskId: string) => {
        // Handle deletion logic here
    };

    return (
        <div className="column TaskView">
            <div className="Container">
                <div className="Heading">Completed Task</div>
                {tasks.map((task: Task) => (
                    <div className="ListDiv" key={task.id}>
                        <div className="TaskCard">
                            <span>{task.task}</span>
                            <Tick />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Completetask;
