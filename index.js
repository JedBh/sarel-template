const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const colors = require("colors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("Server is runing...".rainbow);
});
