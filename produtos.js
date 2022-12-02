const express = require("express");
const port = 3306;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("src/routes/routes");
const app = express();

require("src/database");

app.listen(3306, () => {
   console.log("server iniciado : http://localhost:3306")});
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(routes);