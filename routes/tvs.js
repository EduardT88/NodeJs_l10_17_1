const express = require("express");
const axios = require("axios");
const router = express.Router();

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  const url = "http://fs1.co.il/bus/tv.php";
  const { data } = await axios.get(url);
  res.json(data);
});

router.get("/search", async (req, res) => {
  const searchQ = req.query.s.toLowerCase();
  const url = "http://fs1.co.il/bus/tv.php";
  const { data } = await axios.get(url);
  const filter_ar = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQ) ||
      item.genere.toLowerCase().includes(searchQ) ||
      item.descrption.toLowerCase().includes(searchQ)
    );
  });
  res.json(filter_ar);
});

router.get("/single/:index", async (req, res) => {
  const index = req.params.index;
  const url = "http://fs1.co.il/bus/tv.php";
  const { data } = await axios.get(url);
  res.json(data[index]);
});

module.exports = router;
