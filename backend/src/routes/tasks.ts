import express from 'express';
import * as TasksController from '../controllers/tasks';

const router = express.Router();

router.post('/createtask', TasksController.createTask);
router.get('/gettasks', TasksController.getTasks)
router.put('/updatetask', TasksController.updateTask)
router.delete('/deletetask', TasksController.deleteTask)

export default router;
