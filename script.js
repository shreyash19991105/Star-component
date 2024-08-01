const container = document.getElementById("star-container");
const star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", (e) => {
  let currClicked = e.target.dataset.index;

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled");
  }

  filled = currClicked;
  document.getElementById("count").innerText = `Rating-Count : ${currClicked}`;
});

container.addEventListener("mouseover", (e) => {
  let currClicked = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled");
  }

  filled = currClicked;
});

container.addEventListener("mouseleave", (e) => {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});
