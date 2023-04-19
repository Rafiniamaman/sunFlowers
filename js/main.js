const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')

const showNav = () => {
    nav.classList.toggle('nav--active')
}

burgerBtn.addEventListener('click', showNav)