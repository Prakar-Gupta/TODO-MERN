import { useState, useEffect } from 'react';
import { getTasks, deleteTask, updateTask } from "../Axios/axios";
import { ReactComponent as Edit } from "../Assets/Edit.svg";
import { ReactComponent as Trash } from "../Assets/Trash.svg";
import { ReactComponent as Tick } from "../Assets/Tick.svg";
import { ReactComponent as Tick2 } from "../Assets/Tick2.svg";
import './newlist.css'
import axios from 'axios';

interface Task {
    id: string;
    task: string;
    complete: boolean;
    uploadDate: string;
    __v: number;
}

interface TaskListProps {
    tasks: Task[];
    onTaskUpdate: (taskId: string, updatedTask: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdate }) => {
    const [editableTaskId, setEditableTaskId] = useState<string | null>(null);
    const [editedTask, setEditedTask] = useState<string>('');

    const handleEdit = (taskId: string, task: string) => {
        setEditableTaskId(taskId);
        console.log(task)
        setEditedTask(task);
        console.log(typeof (editedTask))
        console.log(taskId)
        updateTask(taskId, task)
    };
    const handleDelete = async (taskId: string) => {
        try {
            await deleteTask(taskId)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleTaskUpdate = () => {
        if (editedTask.trim() !== '') {
            onTaskUpdate(editableTaskId!, editedTask);
        }
        setEditableTaskId(null);
        setEditedTask('');
    };

    return (
        <div>
            {tasks.map(task => (
                <div className="ListDiv" key={task.id}>
                    <div className='TaskCard'>
                        {editableTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={e => setEditedTask(e.target.value)}
                                    autoFocus
                                />
                                <Tick2 onClick={handleTaskUpdate} />
                            </>
                        ) : (
                            <>
                                <span>{task.task}</span>
                                <Edit onClick={() => handleEdit(task.id, task.task)} />
                                <Trash onClick={() => handleDelete(task.id)} />
                                <Tick />
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

function Newlist() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8001/api/gettasks');
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleTaskUpdate = (taskId: string, updatedTask: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, task: updatedTask };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="column TaskView">
            <div className="Container">
                <div className="Heading">New Task</div>
                <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} />
            </div>
        </div>
    );
}

export default Newlist;
