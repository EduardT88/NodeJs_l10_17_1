const express = require("express");
const router = express.Router();

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  res.json({ msg: "users work" });
});

module.exports = router;
