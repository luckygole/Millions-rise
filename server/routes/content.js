const express = require("express"),
  r = express.Router(),
  auth = require("../middleware/auth"),
  admin = require("../middleware/admin"),
  wrap = require("../utils/wrap"),
  Ipo = require("../models/Ipo"),
  Post = require("../models/Post");
const crud = (M) => {
  const x = express.Router();
  x.get(
    "/",
    wrap(async (q, s) =>
      s.json(await M.find().sort({ createdAt: -1 }).limit(200)),
    ),
  );
  x.post(
    "/",
    auth,
    admin,
    wrap(async (q, s) => s.status(201).json(await M.create(q.body))),
  );
  x.put(
    "/:id",
    auth,
    admin,
    wrap(async (q, s) =>
      s.json(
        await M.findByIdAndUpdate(q.params.id, q.body, {
          new: true,
          runValidators: true,
        }),
      ),
    ),
  );
  x.delete(
    "/:id",
    auth,
    admin,
    wrap(async (q, s) => {
      await M.findByIdAndDelete(q.params.id);
      s.json({ ok: true });
    }),
  );
  return x;
};
r.use("/ipos", crud(Ipo));
r.use("/posts", crud(Post));
module.exports = r;
