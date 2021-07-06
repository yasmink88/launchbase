const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const posts = require("./data");
server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", { express: server, noCache: true });

server.get("/", (req, res) => {
  return res.render("courses", { posts });
});

server.get("/about", (req, res) => {
  const profile = {
    image: "https://github.com/rocketseat-education.png",
    name: "Rocketseat Education",
    about: `Organização que armazena o código das aplicações e desafios dos
        bootcamps e de cursos gratuitos da Rocketseat 🚀`,
    links: [
      {
        name: "Github",
        url: "https://www.github.com/yasmink88",
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/yasminkhalaf",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/yasminkhalaf88",
      },
    ],
  };
  return res.render("about", { profile });
});

server.get("/course", (req, res) => {
  const id = req.query.id;

  const post = posts.find((post) => {
    return post.id == id;
  });

  return res.render("course", { post });
});

server.use((req, res) => {
  res.status(404).render("not-found");
});

server.listen(3000, () => {
  console.log("Server is up and running!");
});
