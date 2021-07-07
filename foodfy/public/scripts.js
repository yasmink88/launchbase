const recipes = document.querySelectorAll(".recipe");

for (let recipe of recipes) {
  const index = recipe.getAttribute("id");
  recipe.addEventListener("click", () => {
    window.location.href = `/recipes/${index}`;
  });
}
