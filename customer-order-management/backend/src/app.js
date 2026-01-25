const express = require('express');
require('dotenv').config();

const customerRoutes = require('./routes/customer.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;