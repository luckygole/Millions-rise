// require("dotenv").config();
// const express = require("express"),
//   helmet = require("helmet"),
//   cors = require("cors"),
//   path = require("path"),
//   fs = require("fs"),
//   connect = require("./config/db");
// const app = express();
// app.set("trust proxy", 1);
// app.use(
//   helmet({ contentSecurityPolicy: false }),
//   cors(),
//   express.json({ limit: "50kb" }),
// );
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/leads", require("./routes/leads"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/funds", require("./routes/funds"));
// app.use("/api", require("./routes/content"));
// const dist = path.join(__dirname, "..", "client", "dist");
// if (fs.existsSync(dist)) {
//   app.use(express.static(dist));
//   app.get("*", (q, s) =>
//     q.path.startsWith("/api")
//       ? s.status(404).json({ error: "Not found" })
//       : s.sendFile(path.join(dist, "index.html")),
//   );
// }
// connect()
//   .then(() =>
//     app.listen(process.env.PORT || 5000, () =>
//       console.log("Millions Rise API on port", process.env.PORT || 5000),
//     ),
//   )
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });


require("dotenv").config();

const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors"),
  path = require("path"),
  fs = require("fs"),
  connect = require("./config/db");

const app = express();

app.set("trust proxy", 1);

app.use(
  helmet({ contentSecurityPolicy: false }),
  cors(),
  express.json({ limit: "50kb" }),
);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/leads", require("./routes/leads"));
app.use("/api/users", require("./routes/users"));
app.use("/api/funds", require("./routes/funds"));
app.use("/api", require("./routes/content"));

const dist = path.join(__dirname, "..", "client", "dist");

if (fs.existsSync(dist)) {
  app.use(express.static(dist));

  app.get("*", (q, s) =>
    q.path.startsWith("/api")
      ? s.status(404).json({ error: "Not found" })
      : s.sendFile(path.join(dist, "index.html")),
  );
}

// Render PORT
const PORT = process.env.PORT || 5000;

// Start server first
app.listen(PORT, "0.0.0.0", async () => {
  console.log("Millions Rise API on port", PORT);

  // Connect MongoDB
  try {
    await connect();
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection failed:", e);
  }
});
