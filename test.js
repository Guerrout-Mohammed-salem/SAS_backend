const { PDFNet } = require("@pdftron/pdfnet-node");
const { fstat } = require("fs");
const path = require("path");
const fs = require("fs");
const { response } = require("express");

const inputPath = path.resolve("./card.pdf");
const outputPath = path.resolve("./card1.pdf");

const replaceText = async () => {
  const pdfdoc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
  await pdfdoc.initSecurityHandler();
  const replacer = await PDFNet.ContentReplacer.create();
  const page = await pdfdoc.getPage(1);

  await replacer.addString("nom", "Benlaria");
  await replacer.addString("prenom", "Ayyoub Yassine");
  await replacer.addIma

  await replacer.process(page);

  pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);
};

PDFNet.runWithCleanup(
  replaceText,
  "demo:1634397589826:78a1452803000000002293bd1274f45c9be0169d829c12eba7f398dc85"
).then(() => {
  fs.readFile(
    outputPath,
    (err,
    (data) => {
      if (err) {
        console.log(err);
      } else {
      }
    })
  );
});
