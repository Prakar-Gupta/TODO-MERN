import { RequestHandler } from 'express';
import TaskModel from '../models/tasks';

export const createTask: RequestHandler = async (req, res, next) => {
    try {
        const newTask = new TaskModel({ id: req.body.id, task: req.body.task, complete: req.body.complete });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const getTasks: RequestHandler = async (req, res, next) => {
    try {
        const tasks = await TaskModel.find().exec();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

export const updateTask: RequestHandler = async (req, res, next) => {
    const { id, task } = req.body;

    try {
        const updatedTask = await TaskModel.findOne({ id: id }).exec()
        console.log(updateTask)
        console.log(task)

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update the task
        updatedTask.task = task;
        await updatedTask.save();

        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
};


export const deleteTask: RequestHandler = async (req, res, next) => {
    const taskId = req.body.id;

    try {
        const deletedTask = await TaskModel.findOneAndDelete({ id: taskId }).exec();

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
