import express from 'express';
import { createCalendar, updateCalendar, deleteCalendar, getAllCalendar, getCalendarById } from "../controllers/calendarControllers.js";



const router = express.Router();

// Routes for calendar management
router.post('/', createCalendar);
router.get('/', getAllCalendar);
router.get('/:id', getCalendarById);
router.put('/:id', updateCalendar);
router.delete('/:id', deleteCalendar);

export default router;

