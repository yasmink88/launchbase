const express = require("express");
const { render } = require("nunjucks");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.render("teachers/index");
});

module.exports = routes;
