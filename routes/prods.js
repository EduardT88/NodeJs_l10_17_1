const express = require("express");
const axios = require("axios");
const router = express.Router();

//הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  const url = "http://fs1.co.il/bus/shop.php";
  const resp = await axios.get(url);
  res.json(resp.data);
});

router.get("/search", async (req, res) => {
  const searchQ = req.query.s.toLowerCase();
  const url = "http://fs1.co.il/bus/shop.php";
  const { data } = await axios.get(url);
  const filter_ar = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQ) ||
      item.cat.toLowerCase().includes(searchQ)
    );
  });

  res.json(filter_ar);
});

router.get("/single/:index", async (req, res) => {
  //נאסוף את הפאראמס אינדקס
  const index = req.params.index;
  const url = "http://fs1.co.il/bus/shop.php";
  const { data } = await axios.get(url);
  const item = data[index];
  res.json(item);
});
module.exports = router;
