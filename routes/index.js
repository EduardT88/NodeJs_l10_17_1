const express = require("express");
const router = express.Router();

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  res.json({ msg: "index work" });
});

module.exports = router;
