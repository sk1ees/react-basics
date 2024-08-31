const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/home", (req, res) => {
  res.send("backend");
});

app.listen(8000, () => {
  console.log("server working");
});
