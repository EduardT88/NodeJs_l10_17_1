const express = require("express");
const { vips_ar } = require("../data/vipsJson");
const router = express.Router();

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  res.json(vips_ar);
});

//vips/single/:index -> האינדקס מייצג משתנה שניתן לאסוף מהכתובת
router.get("/single/:index", async (req, res) => {
  //נאסוף את הפאראמס אינדקס
  const index = req.params.index;
  const vip = vips_ar[index];
  res.json(vip);
});

router.get("/search", async (req, res) => {
  //נאסוף את הפאראמס אינדקס
  const searchQ = req.query.s.toLowerCase();
  const filter_ar = vips_ar.filter((item) => {
    return item.name.toLowerCase().includes(searchQ);
  });
  res.json(filter_ar);
});

module.exports = router;
