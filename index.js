require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const models = require("./models/models.js");

const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const router = require("./routes/index.js");

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).json({ message: "WORKINGG" });
  res("f");
});

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
