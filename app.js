const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static('public'));
app.use("/", indexRouter);

app.listen(port, () => console.log(` Server running on http://localhost:${port}`));