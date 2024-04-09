import mongoose from "mongoose";

const taskManagerSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    
});

const taskManager = mongoose.model('taskManager', taskManagerSchema);

export default taskManager;