const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoute");
const cors = require("cors");
const app = express();

const PORT = 3000;

const mongooseUrl =
  "mongodb+srv://mijbahkhandker:XQHiuWKgUyHwdk28@test-backend.jh4serq.mongodb.net/?retryWrites=true&w=majority&appName=test-backend";

  app.use(express.json());
  app.use(cors());

app.use("/", UserRouter);
// app.get("/", (req, res) =>
//   res.status(200).send({ message: `welcome to server ${PORT}` })
// );
app.listen(PORT);
mongoose
  .connect(mongooseUrl)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error connecting", err);
  });
