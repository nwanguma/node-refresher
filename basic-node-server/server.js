const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("helloInCaps", (greeting) => {
  return greeting.toUpperCase();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home.hbs", {
    page: "home",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    page: "about",
  });
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening to server via port ${port}`);
});
