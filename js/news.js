let newsList = document.querySelector(".news__list-box");;


newObj.forEach((item) => {
  let elItem = document.createElement("li");
  elItem.className = "items" 
  elItem.innerHTML = `
  <a class="news__inner-link" href="#">
  <div class="news__right-div">
  <div class="news__left-div">
    <div class="news__data-div d-flex">
      <p class="news__data news__data1">
        ${item.data}
      </p>
      <hr class="news__hr news__hr1">
    </div>
    <h4 class="news__inner-title news__inner-title1">
    ${item.title}
    </h4>
    <p class="news__inner-text news__inner-text1 pt-3">
    ${item.text}
    </p>
  </div>
</div>
  </a>
  `;
  newsList.appendChild(elItem);
})