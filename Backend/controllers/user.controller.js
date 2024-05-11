const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
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
		const { username, password, re_password } = req.body;
		if (!username || !password || !re_password) {
			return res.status(400).json({ message: 'Missing fields' });
		}

		if (password !== re_password) {
			return res.status(400).json({ message: 'Passwords do not match' });
		}

		if (await User.findOne({ username: username })) {
			return res.status(400).json({ message: 'User already exists' });
		}

		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const user = new User({
			username: username,
			password: hashedPassword
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
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}
		if (await bcrypt.compare(req.body.password, user.password)) {
			console.log('[User] Logged in: ' + user.username);
			return res.status(200).json({ message: 'Login successful' });
		}
		res.status(400).json({ message: 'Invalid credentials' });
	}
	catch (error) {
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
	}
	catch (error) {
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
