// const r = require("express").Router(),
//   rateLimit = require("express-rate-limit"),
//   Lead = require("../models/Lead"),
//   auth = require("../middleware/auth"),
//   admin = require("../middleware/admin"),
//   wrap = require("../utils/wrap");
// r.post(
//   "/",
//   rateLimit({ windowMs: 60 * 60e3, max: 10 }),
//   wrap(async (q, s) => {
//     const { name, phone, interest } = q.body;
//     await Lead.create({ name, phone, interest });
//     s.status(201).json({ ok: true });
//   }),
// );
// r.get(
//   "/",
//   auth,
//   admin,
//   wrap(async (q, s) =>
//     s.json(await Lead.find().sort({ createdAt: -1 }).limit(500)),
//   ),
// );
// module.exports = r;


const r = require("express").Router(),
  rateLimit = require("express-rate-limit"),
  Lead = require("../models/Lead"),
  auth = require("../middleware/auth"),
  admin = require("../middleware/admin"),
  wrap = require("../utils/wrap");
// Public: contact form submissions are saved here and appear in Admin Panel > Leads
r.post(
  "/",
  rateLimit({ windowMs: 60 * 60e3, max: 10 }),
  wrap(async (q, s) => {
    const { name, phone, email, interest, message } = q.body || {};
    await Lead.create({
      name,
      phone,
      email: email || "",
      interest,
      message: message || "",
    });
    s.status(201).json({ ok: true });
  }),
);
r.get(
  "/",
  auth,
  admin,
  wrap(async (q, s) =>
    s.json(await Lead.find().sort({ createdAt: -1 }).limit(500)),
  ),
);
r.delete(
  "/:id",
  auth,
  admin,
  wrap(async (q, s) => {
    await Lead.findByIdAndDelete(q.params.id);
    s.json({ ok: true });
  }),
);
module.exports = r;
