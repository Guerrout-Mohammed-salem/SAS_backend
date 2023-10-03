const express = require("express");
const { update } = require("../models/employee");
const router = express.Router();
const {
  getEmployee,
  getOneEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getCard,
  searchEmployee,
} = require("../controllers/employee");
const { updateValidator, employeeValidator } = require("../validator/index");
const { isAuth, requireSignIn } = require("../controllers/adminAuth");

const multer = require("multer");

//define storage for images
const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/images");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, file.originalname + ".png");
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 5 },
});

//get list of employees
router.get("/", requireSignIn, getEmployee);

//get one employee
router.get("/:id", requireSignIn, getOneEmployee);

//get employee card
router.get("/card/:id" /*, requireSignIn*/, getCard);

//search employees
router.get("/search/:query", requireSignIn, searchEmployee);

//Add new employee
router.post(
  "/add",
  upload.single("image"),
  employeeValidator,
  // requireSignIn,
  addEmployee
);

//modify employee
router.post("/:id", updateEmployee);

//delete an employee
router.delete("/:id", deleteEmployee);

module.exports = router;
