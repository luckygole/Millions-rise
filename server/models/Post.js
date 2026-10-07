const m = require("mongoose");
module.exports = m.model(
  "Post",
  new m.Schema(
    {
      title: { type: String, required: true },
      tag: String,
      body: { type: String, required: true },
    },
    { timestamps: true },
  ),
);
