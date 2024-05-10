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
		const bill = await Bill.create({
			itemId: req.body.itemId,
			userId: req.body.userId,
			quantity: req.body.quantity
		});
		res.status(200).json(bill);
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
