require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(403).json({ message: 'Invalid or expired token' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const createUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (await User.findOne({ username: username })) {
			return res.status(400).json({ message: 'User already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			username: username,
			password: hashedPassword,
			level: 0,
			coin: 100
		});
		const result = await user.save();
		res.status(200).json(result);
		console.log('[User] Created: ' + user.username);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username: username });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}
		if (await bcrypt.compare(password, user.password)) {
			console.log('[User] Logged in: ' + user.username);
			const id = user._id;
			// Create JWT
			const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
			res.cookie('jwt', accessToken, {
				httpOnly: true
			});
			return res.status(200).json({ id, token: accessToken });
		}
		res.status(400).json({ message: 'Invalid credentials' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const updateUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (req.body.password) {
			user.password = req.body.password;
		}
		const result = await user.save();
		res.status(200).json(result);
		console.log('[User] Updated: ' + user.username);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = { 
	getAllUsers, 
	getUserById, 
	createUser, 
	loginUser, 
	updateUser 
};
