const supabase = require('../config/supabase');

exports.createOrder = async (req, res) => {
  const { product_name, quantity, price, customerId } = req.body;

  if (!product_name || !quantity || !price || !customerId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const { data: customer } = await supabase
    .from('customers')
    .select('id')
    .eq('id', customerId)
    .single();

  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  const { error } = await supabase.from('orders').insert([
    {
      product_name,
      quantity,
      price,
      customer_id: customerId
    }
  ]);

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(201).json({ message: 'Order created successfully' });
};

exports.getCustomerOrders = async (req, res) => {
  const { customerId } = req.params;

  const { data: customer } = await supabase
    .from('customers')
    .select('id')
    .eq('id', customerId)
    .single();

  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('customer_id', customerId);

  res.json(data);
};

exports.updateOrder = async (req, res) => {
  const { orderId } = req.params;

  const { data: order } = await supabase
    .from('orders')
    .select('id')
    .eq('id', orderId)
    .single();

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  await supabase
    .from('orders')
    .update(req.body)
    .eq('id', orderId);

  res.json({ message: 'Order updated successfully' });
};

exports.deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  const { data: order } = await supabase
    .from('orders')
    .select('id')
    .eq('id', orderId)
    .single();

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  await supabase.from('orders').delete().eq('id', orderId);

  res.json({ message: 'Order deleted successfully' });
};
