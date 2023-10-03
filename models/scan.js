const mongoose = require("mongoose");

const scanSchema = mongoose.Schema(
  {
    employee_id: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scan", scanSchema);
