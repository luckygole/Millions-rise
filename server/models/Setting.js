const m = require("mongoose");
// Single document (key:'site') holding editable site contact details
module.exports = m.model(
  "Setting",
  new m.Schema(
    {
      key: { type: String, default: "site", unique: true },
      phone: String,
      whatsapp: String,
      email: String,
      address: String,
    },
    { timestamps: true },
  ),
);
