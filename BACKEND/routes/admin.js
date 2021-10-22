const express = require("express");
const {
  createAdmin,
  getAdmin,
  signin,
  adminById,
  requireSignIn,
  isAuth,
} = require("../controllers/adminAuth");
const router = express.Router();

//create admin
router.post("/add", createAdmin);

//get admin
router.get("/", getAdmin);

//admin signin
router.post("/login", signin);

router.get("/secret/:adminId", requireSignIn, isAuth, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.param("adminId", adminById);

module.exports = router;
