const r = require("express").Router(),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcryptjs"),
  rateLimit = require("express-rate-limit");
const User = require("../models/User"),
  auth = require("../middleware/auth"),
  wrap = require("../utils/wrap");
const lim = rateLimit({
  windowMs: 15 * 60e3,
  max: 30,
  message: { error: "Too many attempts. Please try again later." },
});
const sign = (u) =>
  jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
const pub = (u) => ({
  id: u._id,
  name: u.name,
  email: u.email,
  phone: u.phone,
  role: u.role,
});
r.post(
  "/register",
  lim,
  wrap(async (q, s) => {
    const { name, email, phone, password } = q.body || {};
    if (!name || !email || !password)
      throw new Error("Name, email and password are required");
    if (String(password).length < 8)
      throw new Error("Password must be at least 8 characters");
    if (await User.findOne({ email: String(email).toLowerCase() }))
      throw new Error("This email is already registered");
    const u = await User.create({
      name,
      email,
      phone: phone || "",
      password: await bcrypt.hash(String(password), 10),
    }); // role defaults to 'user'
    s.status(201).json({ token: sign(u), user: pub(u) });
  }),
);
r.post(
  "/login",
  lim,
  wrap(async (q, s) => {
    const { email, password } = q.body || {};
    const u = await User.findOne({ email: String(email || "").toLowerCase() });
    if (!u || !(await bcrypt.compare(String(password || ""), u.password)))
      return s.status(401).json({ error: "Invalid email or password" });
    s.json({ token: sign(u), user: pub(u) });
  }),
);
r.get("/me", auth, (q, s) => s.json({ user: pub(q.user) }));
module.exports = r;
