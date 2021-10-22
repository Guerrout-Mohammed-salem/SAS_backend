const axios = require("axios");
const Scan = require("../models/scan");
const Employee = require("../models/employee");
const excel = require("excel4node");
const path = require("path");
const { requireSignIn } = require("./adminAuth");

exports.addScan = (req, res) => {
  const scan = new Scan(req.body);
  scan.save().then((scan, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ new_scan: scan });
  });
};

exports.getScan = (req, res) => {
  Scan.find().then((scan, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json(scan);
  });
};

exports.getScanByUserId = (req, res) => {
  Scan.find({ employee_id: req.params.id }).then((result, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json(result);
  });
};

exports.getScanAfter = (req, res) => {
  Scan.find({
    createdAt: {
      $gte: new Date(req.params.date),
    } /** date example 2021-03-31 */,
  }).then((scan, err) => {
    if (err) return res.status(400).json({ error: err });
    res.json(scan);
  });
};
///////// excel file
exports.getHistory = (req, res) => {
  Employee.find().then((users, err) => {
    if (err) return res.status(400).json({ error: err });

    Scan.find({
      createdAt: {
        $gte: new Date(req.params.date),
      } /** date example 2021-03-31 */,
    }).then((scan, err) => {
      if (err) return res.status(400).json({ error: err });
      generateExcel(users, scan);
      res.sendFile(path.resolve("History.xlsx"));
      // res.json({ response: "All done" });
    });
  });
};

////Excel file generator
function generateExcel(users, scans) {
  //Create new instance of Workbook class
  var workbook = new excel.Workbook();

  //add Worksheet to the Workbook
  var worksheet = workbook.addWorksheet("sheet 1");

  //create reusable style
  var style = workbook.createStyle({
    font: { color: "#000000", size: 12 },
    numberFormat: "$#,##0.00; ($#,##0.00); -",
  });

  var i = 0;
  decalage = 3;
  worksheet.cell(1, 1).string("Name").style(style);
  worksheet.cell(1, 2).string("Date").style(style);
  worksheet.cell(1, 3).string("Time").style(style);

  while (i < scans.length) {
    let user = users.find((user) => user._id == scans[i].employee_id);
    let date = `${scans[i].createdAt}`;
    worksheet
      .cell(i + decalage, 1)
      .string(user.nom + " " + user.prenom)
      .style(style);

    worksheet
      .cell(i + decalage, 2)
      .string(date.substring(4, 15))
      .style(style);

    worksheet
      .cell(i + decalage, 3)
      .string(date.substring(15, 24))
      .style(style);
    i++;
  }
  workbook.write("History.xlsx");
}
