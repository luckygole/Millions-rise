// Live NAV proxy with cache. Source: api.mfapi.in (public AMFI data) – check its terms for commercial use.
const r = require("express").Router(),
  rateLimit = require("express-rate-limit"),
  wrap = require("../utils/wrap");
const cache = new Map();
const cached = async (u, ttl) => {
  const c = cache.get(u);
  if (c && Date.now() - c.t < ttl) return c.d;
  const x = await fetch(u);
  if (!x.ok) throw new Error("NAV source unavailable");
  const d = await x.json();
  if (cache.size > 500) cache.clear();
  cache.set(u, { t: Date.now(), d });
  return d;
};
r.use(rateLimit({ windowMs: 15 * 60e3, max: 300 }));
r.get(
  "/search",
  wrap(async (q, s) => {
    const t = String(q.query.q || "").slice(0, 60);
    if (t.length < 3) return s.json([]);
    s.json(
      (
        await cached(
          "https://api.mfapi.in/mf/search?q=" + encodeURIComponent(t),
          6e5,
        )
      ).slice(0, 15),
    );
  }),
);
r.get(
  "/:code",
  wrap(async (q, s) => {
    if (!/^\d+$/.test(q.params.code)) throw new Error("Bad code");
    const d = await cached("https://api.mfapi.in/mf/" + q.params.code, 36e5);
    s.json({ meta: d.meta, latest: d.data[0], history: d.data.slice(0, 260) });
  }),
);
module.exports = r;
