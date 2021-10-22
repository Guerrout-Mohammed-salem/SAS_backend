const express = require("express");
const {
  createReception,
  getReception,
  signin,
  receptionById,
  requireSignIn,
  isAuth,
} = require("../controllers/receptionAuth");
const router = express.Router();

//create reception
router.post("/add", createReception);

//get reception
router.get("/", getReception);

//reception signin
router.post("/login", signin);

router.get("/secret/:receptionId", requireSignIn, isAuth, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.param("receptionId", receptionById);

module.exports = router;
