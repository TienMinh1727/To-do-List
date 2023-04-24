const tasks = require("./routes/tasks");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

mongoose.connect(
  "mongodb+srv://minhtien:minhtien@cluster0.r8y9j.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
mongoose.connection
  .once("open", function () {
    console.log("Conection has been made!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
