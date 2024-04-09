import express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../controllers/userControllers.js';

const router = express.Router();
const app = express 
const PORT = 3000




// Path to create a new user
router.post('/', createUser);


// Path to get all users
router.get('/', getAllUsers);

// Path to update an existing user
router.put('/:id', updateUser);

// Path to delete an existing user

router.delete('/:id', deleteUser);

export default router;