//MODAL

const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card_container");

for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute("id");
    window.location.href = `/video?id=${videoId}`;
  });
}
