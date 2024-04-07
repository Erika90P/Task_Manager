import mongoose from "mongoose";

const caledarManagerSchema = new mongoose.Schema({
    calendarId: { type: String },
    userId: { type: String },
    calendar_type: { type: String, required: true },
    calendar_link: { type: String },

});

const calendarManager = mongoose.model('calendarManager', calendarManagerSchema);

export default calendarManager;