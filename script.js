const box = document.querySelector("main div.succes");
const box2 = document.querySelector("main div.container");
const score = box.querySelector("span");
const btn = box2.querySelector("form button");
const listItems = box2.querySelectorAll("form ul li");
var selectedRating = null;

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");

    selectedRating = item.textContent;
  });
});

btn.addEventListener("click", () => {
  event.preventDefault();

  if (selectedRating) {
    score.textContent = selectedRating;
    box2.style.display = "none";
    box.style.display = "flex";
    box.classList.add("animated");
  } else {
    alert("Please select a rating before submit.");
  }
});
