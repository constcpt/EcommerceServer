/**
 * @description Address Model
 */

const mongoose = require("../db/db");
const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    city: String, // like Sydney
    department: String, // like UTS Housing
    houseNumber: String, // like 1733D
    name: String,
    phone: String,
  },
  { timestamps: true }
);

const Address = mongoose.model("address", Schema);

module.exports = Address;
