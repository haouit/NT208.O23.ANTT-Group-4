const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routers/user.route');
const billRouter = require('./routers/bill.route');

const URL_CONNECTION = '';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRouter);
app.use('/api/bills', billRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(5038, () => {
	console.log('Server started on http://localhost:5038');
});


mongoose.connect(URL_CONNECTION)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.log('Connection failed');
		console.log(error);
	});
	