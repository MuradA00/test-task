

const consultBtn = document.querySelector('.offer__link'),
      mobileWidth = '(max-width: 700px)',
      mobileMedia = window.matchMedia(mobileWidth),
      infoBtns = document.querySelectorAll('.info-row__btn'),
      tabContents = document.querySelectorAll('.answers__item'),
      burger = document.querySelector('.menu');


burger.addEventListener('click', openMenu);

function openMenu() {
  burger.classList.toggle('--burger-active');

}

infoBtns.forEach(btn => {
  btn.addEventListener('click', selectTab);
})

function selectTab() {
  infoBtns.forEach(infoBtn => {
    infoBtn.classList.remove('active-info-btn');
  })
  this.classList.add('active-info-btn')
  const tabName = this.getAttribute('data-num');
  selectTabContent(tabName)
}

function selectTabContent(tabName) {
  tabContents.forEach(content => {
    content.classList.contains(tabName) ? content.classList.add('content-show') : content.classList.remove('content-show')
  })
}

if (mobileMedia.matches == true) {
  consultBtn.innerText = 'Консультация'
}

// const expertRow = new Swiper('.expert__slider', {
//   slidesPerView: 'auto'

// })
