// Using ES module import statements
import bcrypt from 'bcryptjs';
import User from '../models/User.js'
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';



export const signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

export const login = async (req, res) => {
    try {
        console.log('login')
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                const payload = { email: user.email };
                const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' }); // Example: Expiring in 1 day
                
                // Set the cookie with the token
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true, // Use true if your site is served over HTTPS
                    sameSite: 'None', // Use 'None' to allow sending cookies with cross-origin requests
                }).json({ message: 'Login successful' });
            } else {
                res.status(400).json({ error: 'Password does not match' });
            }
        } else {
            res.status(400).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};


export const logout = async (req, res) => { 
    res.clearCookie('token').json({ message: 'Logout successful' });
}
export const isUserLoggedIn = async (req, res, next) => {
    try {
        const { token = false } = req.cookies;
        if (token) {
            const payload = await jwt.verify(token, process.env.SECRET);
            req.payload = payload;
            next();
        } else {
            throw new Error("Not Logged In");
        }
    } catch (error) {
        res.status(400).json({ "error": error.message });
    }
};
