const fs = require("fs");

const loadData = () => {
  return JSON.parse(fs.readFileSync("db.json", "utf-8"));
};

const saveData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

module.exports = { loadData, saveData };
