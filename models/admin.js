const mongoose = require("mongoose");
const uuid = require("uuid");
const crypto = require("crypto");

const adminSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      trim: true,
      required: true,
    },
    prenom: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
    },
    telephone: {
      type: String,
      trim: true,
      length: 10,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

//virtual field
adminSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid.v1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

//methods
adminSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mongoose.model("Admin", adminSchema);
