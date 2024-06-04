const Bag = require('../models/bag.model');
const Bill = require('../models/bill.model');
const Item = require('../models/item.model');
const User = require('../models/user.model');

const getAllBills = async (req, res) => {
	try {
		const bills = await Bill.find();
		res.status(200).json(bills);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getBillById = async (req, res) => {
	try {
		const bill = await Bill.findById(req.params.id);
		res.status(200).json(bill);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const createBill = async (req, res) => {
	try {
		// create bill
		const bill = await Bill.create({
			itemId: req.body.itemId,
			userId: req.body.userId,
			quantity: req.body.quantity
		});
		
		// update user coin
		const item = (await Item.findById(req.body.itemId).select('price'));
		const price = JSON.parse(JSON.stringify(item)).price;
		const user = await User.findById(req.body.userId).select('coin');
		const coin = JSON.parse(JSON.stringify(user)).coin;
		const totalPrice = req.body.quantity * price;

		if (coin >= totalPrice) {
			await User.findByIdAndUpdate(
				req.body.userId,
				{ $inc: { coin: -totalPrice } }
			);
		} else {
			res.status(400).json({ message: 'Insufficient coins' });
			return;
		}

		// update item in bag
		const bag = await Bag.findOne({ userId: req.body.userId });
		if (!bag) {
			await Bag.create({
				userId: req.body.userId,
				userItems: [{ itemId: req.body.itemId, quantity: req.body.quantity }]
			});
		} else {
			const itemIndex = bag.userItems.findIndex(item => item.itemId == req.body.itemId);
			if (itemIndex !== -1) {
				await Bag.findOneAndUpdate(
					{ userId: req.body.userId },
					{ $inc: { "userItems.$[elem].quantity": req.body.quantity } },
					{ arrayFilters: [{ "elem.itemId": req.body.itemId }] }
				);
			} else {
				await Bag.findOneAndUpdate(
					{ userId: req.body.userId },
					{ $addToSet: { userItems: { itemId: req.body.itemId, quantity: req.body.quantity } } }
				);
			}
		}

		res.status(200).json({ totalPrice, bill });
		console.log('[Bill] Created: ' + bill._id);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	getAllBills,
	getBillById,
	createBill
};
