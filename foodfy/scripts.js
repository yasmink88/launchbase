const modalOverlay = document.querySelector(".modal_overlay");
const recipes = document.querySelectorAll(".recipe");
const modal = document.querySelector(".modal");

for (let recipe of recipes) {
  const recipeId = recipe.getAttribute("id");
  const recipeTitle = document.getElementsByClassName(`${recipeId}_title`)[0]
    .innerText;
  const recipeChef = document.getElementsByClassName(`${recipeId}_chef`)[0]
    .innerText;

  recipe.addEventListener("click", () => {
    modalOverlay.classList.add("show");
    if (modalOverlay.classList.contains("show")) {
      modal.innerHTML = `
  <div class="recipe" id=${recipeId}>
          <div class="recipe_img">
            <img src="assets/${recipeId}.png" alt="Recipe 3" />
          </div>
          <div class="recipe_info">
            <h3 class="${recipeId}_title">${recipeTitle}</h3>
            <p class="${recipeId}_chef">${recipeChef}</p>
          </div>
        </div>
        <div class="modal_close">
          <small>Fechar receita</small>
        </div>`;
    }

    document.querySelector(".modal_close").addEventListener("click", () => {
      modalOverlay.classList.remove("show");
    });
  });
}
