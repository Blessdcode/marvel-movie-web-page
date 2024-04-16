const reviews = [
    {
        id: 1,
        img: "header-1",
        name: "Spider-Man",
        text: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. "
    },
    {
        id: 2,
        img: "header-2",
        name: "Logan",
        text: "Logan comes out of retirement to escort a young mutant named Laura to a safe place. "
    },
    {
        id: 3,
        img: "header-3",
        name: "incredible hulk",
        text: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature. "
    },
    {
        id: 4,
        img: "header-4",
        name: "Captain America",
        text: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. "
    }
];


const authorEl = document.querySelector('.author')
const infoEl = document.querySelector('.info')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')
const pagiNum = document.querySelector('.pagi-num')
const imgEl = document.querySelector('#hero-img')

//  set starting item

let currentItem = 0
let timeOut
//  load initial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)
    // setTimeout()

})

showPerson(currentItem)

// show base on item

function showPerson() {
    const item = reviews[currentItem]
    imgEl.src = `images/${item.img}.png`
    authorEl.textContent = item.name
    infoEl.textContent = item.text


}

//  next slide
nextEl.style.transition = ".3s"

nextEl.addEventListener("click", function () {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
    // clearTimeout(timeOut)
})


pagiNum.addEventListener("click", function () {
    currentItem++
})

//  prev slide

prevEl.addEventListener("click", function () {
    currentItem--

    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
    clearInterval(timeOut)

})

// timeOut = setTimeout(() => {
//     currentItem++
//     showPerson(currentItem)
// }, 3000)

setInterval(() => {
currentItem++
    if (currentItem >= reviews.length) {
        currentItem = 0
    }
    showPerson(currentItem)
}, 3000)






// NavBar

const menuBtn = document.querySelector(".menu-btn")
const buger = document.querySelector(".nav-icon")
const navLink = document.querySelector(".nav-links")

buger.addEventListener("click", () => {
    navLink.classList.add('showMenu')
})


let showMenu = false

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        navLink.classList.add('showMenu');



        showMenu = true;
    } else {
        navLink.classList.remove('showMenu');


        showMenu = false
    }
}