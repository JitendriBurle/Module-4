const express = require('express');
const router = express.Router();
const {
    createOrder,
    getCustomerOrders,
    updateOrder,
    deleteOrder
} = require('../controllers/order.controller');

router.post('/add-order', createOrder);
router.get('/get-my-orders/:customerId', getCustomerOrders);
router.put('/update-order/:orderId', updateOrder);
router.delete('/delete-order/:orderId',deleteOrder);

module.exports = router;