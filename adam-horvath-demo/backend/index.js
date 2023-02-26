const express = require("express");
const cors = require("cors");
const PORT = 3500;

const indicatorRoute = require("./route/indicators");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

app.use("/api/", indicatorRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));