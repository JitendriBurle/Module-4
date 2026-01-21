const router = require("express").Router();
const { loadData } = require("../utils/db");

router.get("/", (req, res) => {
  const data = loadData();
  res.json({ products: data.products });
});

module.exports = router;
