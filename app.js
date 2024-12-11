const express = require("express");
const app = express();
// const http=require('http').Server(app);

app.use(express.json());

require("./models/connection");

const cors = require("cors");
app.use(
  cors({
    origin: "*", // Allow only this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies or authentication headers
  })
);

let user = require("./models/userModel");

app.get("/getuser", async (req, res) => {
  user
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.post("/user", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  console.log(result);
  res.send(result);
});

app.listen(6000, () => {
  console.log("server is running!");
});
