const Reception = require("../models/reception");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//creating reception
exports.createReception = (req, res) => {
    Reception.find().then((result, err) => {
        if (err) return res.status(400).json({ error: err });
        if (result.length == 0) {
            const reception = new Reception(req.body);
            reception.save((err, reception) => {
                console.log(err);
                if (err) return res.status(400).json({ error: err });
                reception.salt = undefined;
                reception.hashed_password = undefined;
                res.json({ reception });
            });
        } else {
            return res
                .status(400)
                .json({ error: "there is already an existed reception" });
        }
    });
};

//Reception signIn
exports.signin = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    Reception.findOne({ username }, (err, user) => {
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
        return res.json({
            token,
            reception: { _id, nom, prenom, username },
            type: 1,
        });
    });
};

exports.getReception = (req, res) => {
    Reception.find().then((reception, err) => {
        if (err) return res.status(400).json({ error: err });
        res.json(reception);
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
    algorithms: ['HS256']
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

exports.receptionById = function(req, res, next, id) {
    Reception.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: "Reception not found",
            });
        }
        req.profile = user;
        next();
    });
};