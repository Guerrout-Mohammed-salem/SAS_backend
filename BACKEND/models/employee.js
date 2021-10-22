const mongoose = require("mongoose");

const employeSchema = mongoose.Schema(
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
    poste: {
      type: String,
      trim: true,
      required: true,
    },
    telephone: {
      type: String,
      trim: true,
      length: 10,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Employee", employeSchema);
