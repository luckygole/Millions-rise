module.exports = (q, s, n) =>
  q.user && q.user.role === "admin"
    ? n()
    : s.status(403).json({ error: "Admin access only" });
