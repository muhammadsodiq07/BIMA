let popularList = document.querySelector(".popular__list");;
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let elCheck = 1;

popularObj.forEach((item) => {
  let elItem = document.createElement("li");
  elItem.className = "popular__item";
  elItem.innerHTML = `
  <img class="popular__img" src="${item.img}" alt="beedroom">
  <div class="popular__inner-box">
    <h4 class="popular__inner-title">
      ${item.name}
    </h4>
    <p class="popular__inner-text">
    ${item.decs}
    </p>
    <button class="popular__inner-btn">
    ${item.button}
    </button>
  </div>
  `;
  popularList.appendChild(elItem);
})

next.addEventListener("click", () => {
  elCheck++;
  carouselIt();
});

prev.addEventListener("click", () => {
  elCheck--;
  carouselIt();
});

function carouselIt() {
  if (elCheck <= 0) {
    prev.disabled = true;
  } else if (elCheck > 0) {
    prev.disabled = false;
  }
  if (elCheck == 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  popularList.style.transform = `translate(${-elCheck * 345}px)`;
}