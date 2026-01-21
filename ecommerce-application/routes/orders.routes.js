const router = require("express").Router();
const { loadData, saveData } = require("../utils/db");

router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const store = loadData();

  const product = store.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock)
    return res.status(400).json({ message: "Insufficient stock" });

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().slice(0, 10)
  };

  product.stock -= quantity;
  store.orders.push(order);
  saveData(store);

  res.status(201).json(order);
});

router.get("/", (req, res) => {
  const store = loadData();
  res.json({ orders: store.orders });
});

router.delete("/:id", (req, res) => {
  const store = loadData();
  const order = store.orders.find(o => o.id == req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Already cancelled" });

  const today = new Date().toISOString().slice(0, 10);
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cancellation not allowed" });

  const product = store.products.find(p => p.id === order.productId);
  product.stock += order.quantity;
  order.status = "cancelled";

  saveData(store);
  res.json({ message: "Order cancelled" });
});

router.patch("/change-status/:id", (req, res) => {
  const { status } = req.body;
  const store = loadData();
  const order = store.orders.find(o => o.id == req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered")
    return res.status(400).json({ message: "Status change not allowed" });

  const flow = { placed: "shipped", shipped: "delivered" };
  if (flow[order.status] !== status)
    return res.status(400).json({ message: "Invalid status flow" });

  order.status = status;
  saveData(store);

  res.json(order);
});

module.exports = router;
