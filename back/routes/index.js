const express = require("express");
const router = express.Router();

const digimons = require("../data/digimons");

router.get("/digimons", (req, res) => {
  res.status(200).json(digimons);
});

router.get("/digimons/page", (req, res) => {
  const page = req.body.page;
  const counter = page * 10;
  const data = digimons.slice(counter, counter + 10);

  res.status(200).json(data);
});

router.post("/digimons/level", (req, res) => {
  const levels = req.body.level;
  console.log(levels)
  const data = digimons.filter((digimon) => digimon.level === levels);
  res.status(200).json(data);
});

module.exports = router;
