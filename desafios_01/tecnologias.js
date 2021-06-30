const users = [
  {
    userName: "Yasmin",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    userName: "Mike",
    technologies: ["Python", "MySQL", "PHP"],
  },
  {
    userName: "Tuane",
    technologies: ["HTML", "CSS", "Node.js"],
  },
];

/*   let user, technology;

  for (let i = 0; i < users.length; i++) {
    user = users[i].userName;
    technology = users[i].technologies;
    console.log(`${user} works with ${technology}`);
  } */

//when going through an array of objects, we can use for ... of
for (let user of users) {
  console.log(`${user.userName} works with ${user.technologies.join(", ")}`);
}

function worksWithCSS() {
  for (let user of users) {
    if (user.technologies.includes("CSS")) {
      console.log(`${user.userName} works with CSS`);
    } else {
      console.log(`${user.userName} doesn't work with CSS`);
    }
  }
}
worksWithCSS();
