const m = require("mongoose");
// role: 'user' (default on signup) or 'admin' (change it in MongoDB to give admin access)
module.exports = m.model(
  "User",
  new m.Schema(
    {
      name: { type: String, required: true, trim: true, maxlength: 80 },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /^\S+@\S+\.\S+$/,
      },
      phone: { type: String, match: /^[0-9]{10}$|^$/ },
      password: { type: String, required: true },
      role: { type: String, enum: ["user", "admin"], default: "user" },
    },
    { timestamps: true },
  ),
);
