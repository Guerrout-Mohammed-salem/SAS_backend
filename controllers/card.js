const htmlToPdf = require("html-pdf-node");
const fs = require("fs");
const QRcode = require("qrcode");
const { base } = require("../models/employee");

exports.createCard = async (user) => {
  console.log(".......................................");
  const { _id, nom, prenom, poste, telephone, email } = user;
  const id = _id,
    name = nom + " " + prenom,
    role = poste,
    phone = telephone;

  createQRcode(id, name, role, phone, email);
  //   QRcode.toDataURL(id, (err, url) => {
  //     console.log("QR:", url);
  //     let file = {
  //       content: card(id, name, role, phone, email, url),
  //     };
  //     htmlToPdf.generatePdf(file, options).then((pdfBuffer) => {
  //       fs.writeFileSync(`./public/uploads/cards/${id}.pdf`, pdfBuffer, "binary");
  //     });
  //   });
};

const createQRcode = async (id, name, role, phone, email) => {
  QRcode.toDataURL(id + "", (err, url) => {
    let options = {
      format: "A4",
      scale: 0.5,
    };

    const idPhoto = base64_encode(`./public/uploads/images/${name}.png`);
    let file = {
      content: card(id, name, role, phone, email, url, idPhoto),
      // content: `<img src = ${url}>`,
    };

    htmlToPdf.generatePdf(file, options).then((pdfBuffer) => {
      //   console.log("buffer: \n", pdfBuffer);
      fs.writeFileSync(
        "./public/uploads/cards/" + id + ".pdf",
        pdfBuffer,
        "binary"
      );
    });
  });
};

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return Buffer.from(bitmap).toString("base64");
  return new Buffer(bitmap).toString("base64");
}
const card = (id, name, role, phone, email, qr, idPhoto) => {
  return `
  <!DOCTYPE html>
<html>
  
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        width: 1000px;
        font-size: 14px;
      }
      .v2_19 {
        width: 100%;
        height: 600px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v3_2 {
        width: 100%;
        height: 562px;
        background: rgba(196, 196, 196, 1);
        opacity: 1;
        border: solid;
        position: absolute;
        top: 19px;
        border-top-left-radius: 56px;
        border-top-right-radius: 56px;
        border-bottom-left-radius: 56px;
        border-bottom-right-radius: 56px;
        overflow: hidden;
      }

      .v2_21 {
        
        color: rgba(0, 24, 48, 1);
        position: absolute;
        top: 60px;
        left: 255px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 60px;
        opacity: 1;
        text-align: left;
      }
      .v2_23 {
        width: 203px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 500px;
        left: 750px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_25 {
        width: 131px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 500px;
        left: 57px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_33 {
        width: 445px;
        height: 445px;
      }
      .qr_image {
        width: 440px;
        height: 440px;
        opacity: 1;
        position: absolute;
        top: 120px;
        left: 302px;
        overflow: hidden;
      }
      .v2_4 {
        width: 100%;
        height: 600px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v3_2 {
        width: 100%;
        height: 562px;
        background: rgba(196, 196, 196, 1);
        opacity: 1;
        position: absolute;
        top: 19px;
        border-top-left-radius: 56px;
        border-top-right-radius: 56px;
        border-bottom-left-radius: 56px;
        border-bottom-right-radius: 56px;
        overflow: hidden;
      }
      .v2_9 {
        
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 221px;
        left: 72px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_10 {
        width: 95px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 271px;
        left: 73px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_11 {
        
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 321px;
        left: 72px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_12 {
        width: 100px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 371px;
        left: 72px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_13 {
        width: 89px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 426px;
        left: 72px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_14 {
        width: 203px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 221px;
        left: 213px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_15 {
        
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 271px;
        left: 213px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_16 {
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 321px;
        left: 213px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_17 {
        width: 169px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 371px;
        left: 213px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_18 {
        
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 426px;
        left: 213px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 30px;
        opacity: 1;
        text-align: left;
      }
      .v2_8 {
        
        color: rgba(0, 24, 48, 1);
        position: absolute;
        top: 73px;
        left: 175px;
        font-family: Roboto;
        font-weight: Regular;
        font-size: 60px;
        opacity: 1;
        text-align: left;
      }
      .v2_7 {
        width: 282px;
        height: 292px;
      }
      .image {
        width: 282px;
        height: 292px;
        opacity: 1;
        position: absolute;
        top: 193px;
        left: 637px;
        border-radius: 50%;
        overflow: hidden;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div class="v2_4">
      <div class="v3_2"></div>
      <span class="v2_9">ID :</span>
      <span class="v2_10">Name :</span>
      <span class="v2_11">Role :</span>
      <span class="v2_12">Phone :</span>
      <span class="v2_13">Email :</span>
      <span class="v2_14">${id}</span>
      <span class="v2_15">${name}</span>
      <span class="v2_16">${role}</span>
      <span class="v2_17">${phone}</span>
      <span class="v2_18">${email}</span>
      <span class="v2_8">EMPLOYEE ID CARD</span>
      <div class="v2_7">
        <img class="image" src="data:image/png;base64,${idPhoto}" />
      </div>
    </div>
    <div class="v2_19">
      <div class="v3_2">
        <span class="v2_21">EMPLOYEE ID CARD</span>

        <div class="v2_33">
          <img class="qr_image"
          src=${qr}
          />
        </div>
      </div>
    </div>
  </body>
</html>

  `;
};
