import taskManager from '../models/Task.js'
import Task from '../models/Task.js';
import mongoose from 'mongoose';


// Controller para crear una nueva tarea
export const createTask = async (req, res) => {
    try {
        const userId = mongoose.Types.ObjectId(req.body.userId); // Convierte el userId a ObjectId
        const { title, description } = req.body;

        const newTaskData = {
            userId, // Usa el userId ya convertido
            title,
            description
        };

        const newTask = await Task.create(newTaskData);
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(400).json({ message: error.message });
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

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // Encuentra todas las tareas
        res.status(200).json(tasks); // Envía las tareas encontradas como respuesta
    } catch (error) {
        console.error('Error al obtener todas las tareas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};