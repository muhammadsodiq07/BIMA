let partnersList = document.querySelector(".partners__list");
let next5 = document.querySelector("#next5");
let prev5 = document.querySelector("#prev5");
let elCheck5 = 1;

let next6 = document.querySelector("#next6");
let prev6 = document.querySelector("#prev6");
let elCheck6 = 1;

next5.addEventListener("click", () => {
  elCheck5++;
  partnersSlider();
});

prev5.addEventListener("click", () => {
  elCheck5--;
  partnersSlider();
});

function partnersSlider() {
  if (elCheck5 <= 0) {
    prev5.disabled = true;
  } else if (elCheck5 > 0) {
    prev5.disabled = false;
  }
  if (elCheck5 == 3) {
    next5.disabled = true;
  } else {
    next5.disabled = false;
  }
  partnersList.style.transform = `translate(${-elCheck5 * 210}px)`;
}



next6.addEventListener("click", () => {
  elCheck6++;
  partnersSlider6();
});

prev6.addEventListener("click", () => {
  elCheck6--;
  partnersSlider6();
});

function partnersSlider6() {
  if (elCheck6 <= 0) {
    prev6.disabled = true;
  } else if (elCheck6 > 0) {
    prev6.disabled = false;
  }
  if (elCheck6 == 7) {
    next6.disabled = true;
  } else {
    next6.disabled = false;
  }
  partnersList.style.transform = `translate(${-elCheck6 * 210}px)`;
}