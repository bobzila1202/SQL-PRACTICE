const cors = require("cors");
const express = require("express");
const app = express();
const books = require("./routes/books")

app.use(cors());
app.use(express.json());

app.use(`/`, books)

module.exports = app