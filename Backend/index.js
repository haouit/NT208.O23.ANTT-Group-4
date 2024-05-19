const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const userRouter = require('./routers/user.route');
const billRouter = require('./routers/bill.route');
const mission_userRouter = require('./routers/mission_user.route');
const pet_ownerRouter = require('./routers/pet_owner.route');
const achieverRouter = require('./routers/achieve.route');

const urlConnectionData = fs.readFileSync('url_connection.json', 'utf8');
const urlConnection = JSON.parse(urlConnectionData);

const URL_CONNECTION = urlConnection.url;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRouter);
app.use('/api/bills', billRouter);
app.use('/api/mission_users', mission_userRouter);
app.use('/api/pet_owners', pet_ownerRouter);
app.use('/api/achieves', achieverRouter);

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
	