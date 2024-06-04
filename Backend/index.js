const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

let handler;

import('../Frontend/build/handler.js').then(module => {
	const handler = module.handler;
  

	const { requireAuth } = require('./middleware/auth');

	const userRouter = require('./routers/user.route');
	const billRouter = require('./routers/bill.route');
	const petRouter = require('./routers/pet.route');
	const mission_userRouter = require('./routers/mission_user.route');
	const pet_ownerRouter = require('./routers/pet_owner.route');
	const achieverRouter = require('./routers/achieve.route');
	
	const app = express();
	
	// Middleware
	app.use(express.json());
	app.use(cookieParser());
	app.use(cors());
	
	// routes
	app.use('/api/users', userRouter);
	app.use('/api/bills', billRouter);
	app.use('/api/pets', petRouter);
	app.use('/api/mission_users', mission_userRouter);
	app.use('/api/pet_owners', pet_ownerRouter);
	app.use('/api/achieves', achieverRouter);
	
	app.get('/protected', requireAuth, (req, res) => {
		res.send('You are authenticated!');
	});

	// let SvelteKit handle everything else, including serving prerendered pages and static assets
	app.use(handler);

	app.listen(5038, () => {
		console.log('Server started on http://localhost:5038');
	});
	
	mongoose.connect(process.env.MONGO_URI)
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((error) => {
			console.log('Connection to MongoDB failed');
			console.log(error);
		});
		
  
  }).catch(err => {
	console.error(err);
  });
