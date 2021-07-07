//setting up express and nunjucks
const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");

server.set("view engine", "njk");
nunjucks.configure("views", { express: server, noCache: true });

//setting public folder

server.use(express.static("public"));

//routes

server.get("/", (req, res) => {
  return res.render("index", { recipes });
});

server.get("/about", (req, res) => {
  return res.render("about");
});

server.get("/recipes", (req, res) => {
  return res.render("recipes", { recipes });
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];

  return res.render("recipe", { recipe });
});

//creating server port
server.listen(8000);
