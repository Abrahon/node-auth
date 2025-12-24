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

require("dotenv").config(); // MUST be first line

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

