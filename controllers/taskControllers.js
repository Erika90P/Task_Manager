import taskManager from '../models/Task.js'
import Task from '../models/Task.js';

// Controller para crear una nueva tarea
export const createTask = async (req, res) => {
    try {
        const newTask = await taskManager.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller para obtener todas las tareas
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller para actualizar una tarea existente
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller para eliminar una tarea existente
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller para obtener las tareas de un usuario específico
export const getUserTasks = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userTasks = await Task.find({ userId: userId });
        res.status(200).json(userTasks);
    } catch (error) {
        console.error('Error al obtener las tareas del usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
