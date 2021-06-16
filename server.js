const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { nanoid } = require("nanoid");
const PORT = process.env.PORT || 3001;
const data = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client/build")));
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Failed to connect to database.\n Error : " + err);
  });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.post("/:id", async (req, res) => {
  const code = await data.findOne({ link: req.params.id });
  if (code === null) return res.sendStatus(404);
  return res.send({ code: code.code, languange: code.languange });
});

app.post("/", async (req, res) => {
  const id = nanoid(10);
  var st = false;
  await data
    .create({ link: id, code: req.body.code })
    .then(() => {
      st = true;
    })
    .catch((err) => {
      console.log("Error : " + err);
    });
  if (st) {
    return res.send({ link: id });
  } else {
    return res.sendStatus(409);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
