const Admin = require("../models/admin");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//creating admin
exports.createAdmin = (req, res) => {
  Admin.find().then((result, err) => {
    if (err) return res.status(400).json({ error: err });
    if (result.length == 0) {
      const admin = new Admin(req.body);
      admin.save((err, admin) => {
        if (err) return res.status(400).json({ error: err });
        admin.salt = undefined;
        admin.hashed_password = undefined;
        res.json({ admin });
      });
    } else {
      return res
        .status(400)
        .json({ error: "there is already an existed admin" });
    }
  });
};

//Admin signIn
exports.signin = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  Admin.findOne({ username }, (err, user) => {
    //If the user doesn't exist
    if (err || !user) {
      return res.status(400).json({
        err: "There is no user with this username!",
      });
    }
    //making sure that the username and the password match
    if (!user.authenticate(password))
      return res.status(401).json({
        err: "Wrong username or password!",
      });

    //generating a signed token with the user ID and the Secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    //persist the token as "t" in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    //returning the user and the token as a response
    const { _id, nom, prenom, username } = user;
    return res.json({ token, admin: { _id, nom, prenom, username }, type: 0 });
  });
};

exports.getAdmin = (req, res) => {
  Admin.find().then((admin, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json(admin);
  });
};

//sign-out
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signed-out" });
};

//require sign-in
exports.requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

//Authentication permissions
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!req.auth._id)
    return res.status(403).json({
      error: "Access denied!",
    });
  next();
};

exports.adminById = function (req, res, next, id) {
  Admin.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "Admin not found",
      });
    }
    req.profile = user;
    next();
  });
};
