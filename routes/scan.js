const express = require("express");
const { update } = require("../models/employee");
const router = express.Router();
const { requireSignIn } = require("../controllers/adminAuth");
const {
  getScan,
  addScan,
  getScanByUserId,
  getScanAfter,
  getHistory,
} = require("../controllers/scan");

//get scans
router.get("/", /* requireSignIn,*/ getScan);

//add scans
router.post("/add", /* requireSignIn,*/ addScan);

//get scans by user id
router.get("/user/:id", getScanByUserId);

//get scans after a date
router.get("/date/:date", /* requireSignIn,*/ getScanAfter);

//get history of scans
router.get("/history/:date", /* requireSignIn,*/ getHistory);

module.exports = router;
