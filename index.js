// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const authRoutes = require("./routes/auth.routes");

// const app = express();
// app.use(express.json());

// app.use("/api/auth", authRoutes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong" });
// });

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(process.env.PORT, () =>
//       console.log(`Server running on port ${process.env.PORT}`)
//     );
//   })
//   .catch((err) => console.error(err));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ✅ DEBUG middleware (GOOD)
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// ✅ Parse JSON ONLY for non-GET requests
app.use((req, res, next) => {
  if (req.method === "GET") return next();
  express.json()(req, res, next);
});

// Routes
app.use("/api/auth", require("./routes/auth.routes"));



// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

// Server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

