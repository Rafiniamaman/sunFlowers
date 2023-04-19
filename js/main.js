const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItem1 = document.querySelector('.nav__item-1')
const navItem2 = document.querySelector('.nav__item-2')
const navItem3 = document.querySelector('.nav__item-3')
const navItem4 = document.querySelector('.nav__item-4')


const showNav = () => {
    nav.classList.toggle('nav--active')
}
const closeNav = () => {
    nav.classList.toggle('nav--active')
}


navItem1.addEventListener('click', closeNav)
navItem2.addEventListener('click', closeNav)
navItem3.addEventListener('click', closeNav)
navItem4.addEventListener('click', closeNav)
burgerBtn.addEventListener('click', showNav)