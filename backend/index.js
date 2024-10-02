// require("dotenv").config();

// const config = require("./config.json");
// const mongoose = require("mongoose");

// mongoose.connect(config.connectionString);

// const User = require("./models/user.model");

// const express = require("express");
// const cors = require("cors");
// const app = express();

// const jwt = require("jsonwebtoken");
// const { authenticateToken } = require("./utilities");

// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.get("/", (req, res) => {
//   res.json({ data: "moda whotta" });
// });

// //Create account
// app.post("/create-account", async (req, res) => {
//   const { fullName, email, password } = req.body;

//   if (!fullname) {
//     return res
//       .status(400)
//       .json({ error: true, message: "Full Name is required!" });
//   }

//   if (!passsword) {
//     return res
//       .status(400)
//       .json({ error: true, message: "Password is required!" });
//   }

//   if (!email) {
//     return res
//       .status(400)
//       .json({ error: true, message: "Email is required! " });
//   }

//   if (isUser) {
//     return res.json({
//       error: true,
//       message: "User already exists",
//     });
//   }

//   const user = new User({
//     fullName,
//     email,
//     password,
//   });

//   await user.save();

//   const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "36000m",
//   });
// });

// app.listen(8000);

// module.exports = app;
require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("./models/user.model");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

// Middleware to parse incoming JSON
app.use(express.json()); // This line ensures that req.body is available
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "moda whotta" });
});

// Create account
app.post("/create-account", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Full Name is required!" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required!" });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required!" });
  }

  const isUser = await User.findOne({ email });

  if (isUser) {
    return res
      .status(400)
      .json({ error: true, message: "User already exists" });
  }

  const user = new User({
    fullName,
    email,
    password,
  });

  await user.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  res.status(201).json({ user, accessToken });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;
