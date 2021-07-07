const hideIngredient = document.querySelector(".hide_ingredients");
const hidePrepare = document.querySelector(".hide_prepare");
const hideInfo = document.querySelector(".hide_info");

hideIngredient.addEventListener("click", () => {
  document.querySelector(".ingredients_content").classList.toggle("hide");
  if (hideIngredient.innerHTML === "Hide") {
    hideIngredient.innerHTML = "Show";
  } else {
    hideIngredient.innerHTML = "Hide";
  }
});
hidePrepare.addEventListener("click", () => {
  document.querySelector(".prepare_content").classList.toggle("hide");
  if (hidePrepare.innerHTML === "Hide") {
    hidePrepare.innerHTML = "Show";
  } else {
    hidePrepare.innerHTML = "Hide";
  }
});
hideInfo.addEventListener("click", () => {
  document.querySelector(".info_content").classList.toggle("hide");
  if (hideInfo.innerHTML === "Hide") {
    hideInfo.innerHTML = "Show";
  } else {
    hideInfo.innerHTML = "Hide";
  }
});
