// Usage (from /server): npm run make-admin -- user@email.com   (user must have signed up first)
require("dotenv").config({
  path: require("path").join(__dirname, "..", ".env"),
});
const mongoose = require("mongoose"),
  User = require("../models/User");
(async () => {
  const email = (process.argv[2] || "").toLowerCase();
  if (!email) {
    console.log("Usage: npm run make-admin -- user@email.com");
    process.exit(1);
  }
  await mongoose.connect(process.env.MONGO_URI);
  const u = await User.findOneAndUpdate(
    { email },
    { role: "admin" },
    { new: true },
  );
  console.log(
    u ? u.email + " is now admin" : "No user with that email. Sign up first.",
  );
  process.exit(0);
})();
