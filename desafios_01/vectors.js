const developer = {
  devName: "Yasmin",
  age: 33,
  technologies: [
    {
      techName: "C++",
      specializedIn: "Desktop Apps",
    },
    {
      techName: "Javascript",
      specializedIn: "Web/Mobile",
    },
  ],
};

console.log(`
The developer ${developer.devName} is ${developer.age} years old and uses ${developer.technologies[0].techName} for ${developer.technologies[0].specializedIn}`);
