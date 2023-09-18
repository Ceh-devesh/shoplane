var searchBtn = document.querySelector('.searchBtn')
var closeBtn = document.querySelector('.closeBtn')
var searchBox = document.querySelector('.searchBox')
var cartContainer = document.querySelector('.cart-container')
var img = document.querySelector('.group img')
var header = document.querySelector('header')
var navigation = document.querySelector('.navigatio')
var menuBtn = document.querySelector('.menuBtn')

searchBtn.addEventListener('click', function () {
    searchBox.classList.add('active')
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
    // cartContainer.style.display = 'none'
    // img.style.display = 'none'
    cartContainer.classList.add('active')
    img.classList.add('active')
    menuBtn.classList.add('hide')
    header.classList.remove('open')
})

closeBtn.addEventListener('click', function () {
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    // cartContainer.style.display = 'block'
    // img.style.display = 'block'
    cartContainer.classList.remove('active')
    img.classList.remove('active')
    menuBtn.classList.remove('hide')
    // header.classList.toggle('open')
})

menuBtn.addEventListener('click', function() {
    header.classList.toggle('open')
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    cartContainer.classList.toggle('active')
    img.classList.toggle('active')
})