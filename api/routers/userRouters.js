import express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../controllers/userControllers.js';
import { signup, login, logout } from '../controllers/authController.js';
import { isUserLoggedIn } from '../controllers/authController.js';



const router = express.Router();
const app = express 
const PORT = 3000

router.get('/logout', logout)


// Path to create a new user
router.post('/', createUser);


// Path to get all users
router.get('/', getAllUsers);

router.post('/signup', signup);
router.post('/login', login);

// Path to update an existing user
router.put('/:id', updateUser);

// Path to delete an existing user

router.delete('/:id', deleteUser);



export default router;