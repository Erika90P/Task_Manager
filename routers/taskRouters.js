
import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controllers/taskControllers.js';
import { getUserTasks } from '../controllers/taskControllers.js'

const app = express 
const PORT = 3000

const router = express.Router();


// Path to create a new task
router.post('/', createTask);


// Path to get all tasks
router.get('/', getAllTasks);

// Path to update an existing task
router.put('/:id', updateTask);

// Path to delete an existing task

router.delete('/:id', deleteTask);

router.get('/user/:userId/tasks', getUserTasks); // Ruta para obtener las tareas de un usuario específico

export default router;