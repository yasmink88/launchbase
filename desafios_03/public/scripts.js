const cards = document.querySelectorAll(".card_container");

for (let card of cards) {
  const blogId = card.getAttribute("id");
  card.addEventListener("click", () => {
    window.location.href = `/course?id=${blogId}`;
  });
}
