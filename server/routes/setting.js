const r = require("express").Router(),
  Setting = require("../models/Setting"),
  auth = require("../middleware/auth"),
  admin = require("../middleware/admin"),
  wrap = require("../utils/wrap");
const pub = (d) => ({
  phone: d?.phone || "",
  whatsapp: d?.whatsapp || "",
  email: d?.email || "",
  address: d?.address || "",
});
// Public: website reads contact details from here
r.get(
  "/",
  wrap(async (q, s) =>
    s.json(pub(await Setting.findOne({ key: "site" }).lean())),
  ),
);
// Admin only: update phone / WhatsApp / email / address
r.put(
  "/",
  auth,
  admin,
  wrap(async (q, s) => {
    const b = q.body || {};
    const phone = String(b.phone || "")
        .trim()
        .slice(0, 25),
      email = String(b.email || "")
        .trim()
        .slice(0, 80),
      address = String(b.address || "")
        .trim()
        .slice(0, 250);
    let wa = String(b.whatsapp || "").replace(/\D/g, "");
    if (phone && phone.replace(/\D/g, "").length < 10)
      throw new Error("Enter a valid phone number");
    if (wa.length === 10) wa = "91" + wa;
    if (wa && (wa.length < 11 || wa.length > 15))
      throw new Error("Enter a valid WhatsApp number with country code");
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      throw new Error("Enter a valid email");
    s.json(
      pub(
        await Setting.findOneAndUpdate(
          { key: "site" },
          { phone, whatsapp: wa, email, address },
          { new: true, upsert: true, setDefaultsOnInsert: true },
        ).lean(),
      ),
    );
  }),
);
module.exports = r;
