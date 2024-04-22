let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');
let burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('bx-x')
  menu.classList.toggle('active')
});

document.querySelectorAll('.menu a').forEach(n=> n.addEventListener('click', ()=> {
  menu.classList.remove('active')
  burger.classList.remove('bx-x')
}));

let sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
})
sr.reveal('.title, .one, .two, .three, .foor, .five, .titles, .carte, .text, .first, .second, .third, .forth, .copy, img', {interval: 200})






var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });