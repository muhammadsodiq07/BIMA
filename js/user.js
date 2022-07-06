let cityList = document.getElementById("city__list-id");
let next2 = document.querySelector("#next2");
let prev2 = document.querySelector("#prev2");
let elCheck2 = 1;

let next3 = document.querySelector("#next3");
let prev3 = document.querySelector("#prev3");
let elCheck3 = 1;

let next4 = document.querySelector("#next4");
let prev4 = document.querySelector("#prev4");
let elCheck4 = 1;

userObj.forEach((el) => {
  let element = document.createElement("li");
  element.className = "city__item";
  element.innerHTML = `
  <div class="city__innre-div d-flex align-items-center justify-content-between">
  <div class="city__inner-img d-flex d-flex align-items-center">
    <img class="city__inner-user" src="${el.img}" alt="user">
    <div class="city__inner-box">
      <h4 class="city__inner-name">
        ${el.name}
      </h4>
      <p class="city__text">
        ${el.jobs}
      </p>
    </div>
  </div>
  <div class="city__stars">
    <i class='bx bxs-star city__icons'></i>
    <i class='bx bxs-star city__icons'></i>
    <i class='bx bxs-star city__icons'></i>
    <i class='bx bxs-star city__icons'></i>
    <i class='bx bxs-star city__icons'></i>
  </div>
</div>
<img class="city__icon-img" src="images/cityIcon.svg" alt="">
<p class="city__decs">
${el.desc}
</p>
  `;
  cityList.appendChild(element);
})

next2.addEventListener("click", () => {
  elCheck2++;
  userSlider();
});

prev2.addEventListener("click", () => {
  elCheck2--;
  userSlider();
});

function userSlider() {
  if (elCheck2 <= 0) {
    prev2.disabled = true;
  } else if (elCheck2 > 0) {
    prev2.disabled = false;
  }
  if (elCheck2 == 3) {
    next2.disabled = true;
  } else {
    next2.disabled = false;
  }
  cityList.style.transform = `translate(${-elCheck2 * 700}px)`;
}

next3.addEventListener("click", () => {
  elCheck3++;
  userSlider2();
});

prev3.addEventListener("click", () => {
  elCheck3--;
  userSlider2();
});

function userSlider2() {
  if (elCheck3 <= 0) {
    prev3.disabled = true;
  } else if (elCheck3 > 0) {
    prev3.disabled = false;
  }
  if (elCheck3 == 3) {
    next3.disabled = true;
  } else {
    next3.disabled = false;
  }
  cityList.style.transform = `translate(${-elCheck3 * 530}px)`;
}

next4.addEventListener("click", () => {
  elCheck4++;
  userSlider4();
});

prev4.addEventListener("click", () => {
  elCheck4--;
  userSlider4();
});

function userSlider4() {
  if (elCheck4 <= 0) {
    prev4.disabled = true;
  } else if (elCheck4 > 0) {
    prev4.disabled = false;
  }
  if (elCheck4 == 3) {
    next4.disabled = true;
  } else {
    next4.disabled = false;
  }
  cityList.style.transform = `translate(${-elCheck4 * 330}px)`;
}