const { findById } = require("../models/employee");
const Employee = require("../models/employee");
const QRcode = require("qrcode");
const { createCard } = require("./card");
const path = require("path");
const fs = require("fs");

exports.getEmployee = (req, res) => {
  Employee.find().then((employees, err) => {
    if (err) return res.status(400).json({ error: "cannot get employees" });
    for (let i = 0; i < employees.length; i++) {
      employees[i].image = base64_encode(
        path.resolve(`public/uploads/images/${employees[i].image}`)
      );
    }

    // employees.map((employee) => {
    //   console.log(employee.image);
    //   fs.readFile(`../public/uploads/images/${employee.image}`, (err, data) => {
    //     employee = { image: data };
    //   });
    // });

    res.json({
      employees,
    });
  });
};

exports.getOneEmployee = (req, res) => {
  Employee.findById(req.params.id).then((employee, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json({
      employee,
    });
  });
};

exports.addEmployee = (req, res) => {
  const employee = new Employee({
    nom: req.body.nom,
    prenom: req.body.prenom,
    poste: req.body.poste,
    telephone: req.body.telephone,
    email: req.body.email,
    image: req.file.filename,
  });
  employee.save().then((employee, err) => {
    if (err) return res.status(400).json({ error: err });
    createCard(employee);
    res.json({
      created_user: employee,
    });
  });
};

exports.updateEmployee = (req, res) => {
  Employee.findById(req.params.id).then((error, employee) => {
    if (err) return res.status(400).json({ error: "Can't find user!" });
    employee = req.body;
    employee.save().then((response, err) => {
      if (err) return res.status(400).json({ error: "Can't update this user" });
      res.json({
        created_user: response,
      });
    });
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.findByIdAndDelete(req.params.id).then((response, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ deleted_employee: response });
  });
};

exports.getCard = (req, res) => {
  Employee.findById(req.params.id).then((response, err) => {
    res.json({
      file: base64_encode(
        path.resolve(`public/uploads/cards/${response._id}.pdf`)
      ),
    });
  });
};

exports.searchEmployee = (req, res) => {
  Employee.find({
    $or: [
      { nom: { $regex: req.params.query } },
      { prenom: { $regex: req.params.query } },
    ],
  }).then((employees, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json(employees);
  });
};
//encode file is base64 form
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return Buffer.from(bitmap).toString("base64");
  return new Buffer(bitmap).toString("base64");
}
