import { google } from 'googleapis';

// Configuración de autenticación con Google Calendar API
const auth = new google.auth.GoogleAuth({
    keyFile: 'api/utils/credentials.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
});

// Creación del cliente de la API de calendario
const calendar = google.calendar({ version: 'v3', auth });

// Función para crear un evento en el calendario del usuario
async function createCalendarEvent(eventData) {
    try {
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: eventData,
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear el evento en el calendario:', error);
        throw error;
    }
}

export { createCalendarEvent };
