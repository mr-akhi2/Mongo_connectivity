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
let Client_details = require("./models/Client");
let disease_name = require("./models/Disease");
let Claim_details = require("./models/Claims");

app.post("/disease", async (req, res) => {
  let disease = new disease_name(req.body);
  let disease_result = await disease.save();
  res.send(disease_result);
});

app.get("/disease", async (req, res) => {
  disease_name
    .find()
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/disease/:name", async (req, res) => {
  const name = req.params.name;
  try {
    // Use a case-insensitive regex to match names that start with the input
    const filteredDiseases = await disease_name.find({
      disease_name: { $regex: new RegExp(`^${name}`, "i") },
    });

    if (filteredDiseases.length > 0) {
      res.json(filteredDiseases); // Return all matching diseases
      console.log(filteredDiseases);
    } else {
      res
        .status(404)
        .json({ error: "No diseases found starting with the provided name" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the disease data" });
  }
});

app.post("/claim", async (req, res) => {
  let claim = new Claim_details(req.body);
  let claim_result = await claim.save();
  res.send(claim_result);
});
app.get("/claim", async (req, res) => {
  await Claim_details.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.get("/client", async (req, res) => {
  await Client_details.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.post("/client", async (req, res) => {
  let client = new Client_details(req.body);
  let client_result = await client.save();
  res.send(client_result);
});

app.get("/user", async (req, res) => {
  user
    .find()
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.post("/user", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  // console.log(result);
  res.send(result);
});

app.listen(6000, () => {
  console.log("server is running!");
});
