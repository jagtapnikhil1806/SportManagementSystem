require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json);

app.get("/healthcheck", (req, res) => res.send("ok"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port:${port}`));
