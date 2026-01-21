const router = require("express").Router();
const { loadData } = require("../utils/db");

router.get("/allorders", (req, res) => {
  const orders = loadData().orders;
  res.json({ count: orders.length, orders });
});

router.get("/cancelled-orders", (req, res) => {
  const orders = loadData().orders.filter(o => o.status === "cancelled");
  res.json({ count: orders.length, orders });
});

router.get("/shipped", (req, res) => {
  const orders = loadData().orders.filter(o => o.status === "shipped");
  res.json({ count: orders.length, orders });
});

router.get("/total-revenue/:productId", (req, res) => {
  const store = loadData();
  const product = store.products.find(p => p.id == req.params.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const totalRevenue = store.orders
    .filter(o => o.productId == product.id && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ totalRevenue });
});

router.get("/alltotalrevenue", (req, res) => {
  const store = loadData();

  const totalRevenue = store.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = store.products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue });
});

module.exports = router;
