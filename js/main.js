let elBtn = document.querySelector('.header__burger');
let elNav = document.querySelector('.header__navbar') 
let elBtnToggle = document.querySelector('.header__burger')

elBtn.addEventListener('click', function(){
  elNav.classList.toggle('show');
  elBtnToggle.classList.toggle('active')
})


