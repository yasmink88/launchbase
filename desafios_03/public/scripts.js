const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card_container");
const modal = document.querySelector(".modal");

for (let card of cards) {
  const blogId = card.getAttribute("id");
  card.addEventListener("click", () => {
    if (modal.classList.contains("maximize")) {
      modal.classList.remove("maximize");
    }

    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://blog.rocketseat.com.br/${blogId}`;
  });
}

document.querySelector(".modal_fullscreen").addEventListener("click", () => {
  modal.classList.toggle("maximize");
  document.querySelector(".modal_close").classList.toggle("hide");
});

document.querySelector(".modal_close").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});
