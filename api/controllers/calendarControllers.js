import calendarManager from '../models/Calendar.js'
import * as calendarService from '../services/calendarService.js';


// const event = await calendarService.createCalendarEvent(eventData);

// Handler to create a new calendarManager record
export const createCalendar = async (req, res) => {
    try {
        const newCalendar = await calendarManager.create(req.body);
        res.status(201).json(newCalendar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Handler to get all records from calendarManager
export const getAllCalendar = async (req, res) => {
    try {
        const calendarManagers = await calendarManager.find();
        res.status(200).json(calendarManagers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a calendar record by its ID
export const getCalendarById = async (req, res) => {
    try {
        const calendar = await CalendarManager.findById(req.params.id);
        if (!calendar) {
            return res.status(404).json({ message: 'Calendar not found' });
        }
        res.status(200).json(calendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a calendar record by its ID
export const updateCalendar = async (req, res) => {
    try {
        const updatedCalendar = await CalendarManager.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCalendar) {
            return res.status(404).json({ message: 'Calendar not found' });
        }
        res.status(200).json(updatedCalendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a calendar record by its ID
export const deleteCalendar = async (req, res) => {
    try {
        const deletedCalendar = await CalendarManager.findByIdAndDelete(req.params.id);
        if (!deletedCalendar) {
            return res.status(404).json({ message: 'Calendar not found' });
        }
        res.status(200).json({ message: 'Calendar deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Función para crear un nuevo evento en el calendario
export const createEvent = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const eventData = {
            summary: req.body.summary,
            start: { dateTime: req.body.startTime },
            end: { dateTime: req.body.endTime },
        };

        // Crea el evento utilizando el servicio de calendario
        const event = await calendarService.createCalendarEvent(eventData);

        // Responde con el evento creado
        res.status(201).json(event);
    } catch (error) {
        // Maneja los errores y responde con un mensaje de error
        console.error('Error al crear el evento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};