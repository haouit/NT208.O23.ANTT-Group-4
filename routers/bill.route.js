const express = require('express');

const router = express.Router();
const { getAllBills, getBillById, createBill } = require('../controllers/bill.controller');

router.get('/all', getAllBills);
router.get('/id/:id', getBillById);
router.post('/create', createBill);

module.exports = router;
