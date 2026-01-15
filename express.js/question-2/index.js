import express from "express";
import os from "os";
import dns from "dns";
import { readDataFile } from "./read.js";

const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.get("/readfile", async (req, res) => {
  try {
    const data = await readDataFile();
    res.send(data);
  } catch (err) {
    res.status(500).send("Unable to read file");
  }
});

app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / 1024 ** 3).toFixed(0) + " GB";
  const freeMemory = (os.freemem() / 1024 ** 3).toFixed(0) + " GB";
  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length;

  res.json({
    platform: os.platform(),
    totalMemory,
    freeMemory,
    cpuModel,
    cpuCores,
  });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).send("DNS lookup failed");
      return;
    }

    res.json({
      hostname: "masaischool.com",
      addresses,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});