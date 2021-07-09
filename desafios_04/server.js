//calling express
const express = require("express");

//calling template engine
const nunjucks = require("nunjucks");

//to pull data from another file
const routes = require("./routes");

//configuring server to use express
const server = express();

//setting template engine
server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

//setting static folder
server.use(express.static("public"));
server.use(routes);
//call server at port number
server.listen(5000);
