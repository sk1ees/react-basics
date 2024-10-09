const express = require("express");
const db = require("./config/db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.post("/register", (req, res) => {
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("server connected!");
});
