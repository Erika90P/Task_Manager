import mongoose from "mongoose";

const userManagerSchema = new mongoose.Schema({

    email: { type: String, required: true },
    password: { type: String, required: true }

});

const userManager = mongoose.model('userManager', userManagerSchema);

export default userManager;