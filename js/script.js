// HTML RIPRODOTTO IN JS

// ADD SECTION
const carosello = document.createElement('section');

// ADD CONTAINER
const container = document.createElement('div');
container.classList.add('container-sm', 'py-5');
// feat container in section
carosello.appendChild(container);

// ARRAY IMMAGINI
const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// CICLO CARUSEL

let slide = ''

for (let i = 0; i < images.length; i++) {

    const image = images[i].image
    const title = images[i].title
    const text = images[i].text

    let slideActive = 'none';
    if (i === 0) {
        slideActive = 'active';
    }

    const slide = `
    <div class="slide none ${slideActive}">
        <img src=" ${image} " alt="">
        <div class="text">
            <h2> ${title} </h2>
            <p>
                ${text}
            </p>
        </div>
    </div>
    `

    console.log(image, title, text)

    container.innerHTML += slide
}


// feat carusel in body html
document.body.appendChild(carosello);

// ARROW
// LEFT ARROW
const leftArrow = document.createElement('div');
leftArrow.classList.add('arrow', 'left-arrow');
const leftArrowIcon = document.createElement('i');
leftArrowIcon.classList.add('fa-solid', 'fa-chevron-left');
// feat 'leftArrow' div in container & feat icon in 'leftArrow' div
leftArrow.appendChild(leftArrowIcon);
container.appendChild(leftArrow);

// RIGHT ARROW
const rightArrow = document.createElement('div');
rightArrow.classList.add('arrow', 'right-arrow');
const rightArrowIcon = document.createElement('i');
rightArrowIcon.classList.add('fa-solid', 'fa-chevron-right');
// feat 'rightArrow' div in container & feat icon in 'rightArrow' div
rightArrow.appendChild(rightArrowIcon);
container.appendChild(rightArrow);



// CLICK SULL'ICONA

const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

let slideAttiva = 0

slideAttiva = (slideAttiva + slideElements.length - 1) % slideElements.length;

let slideCorrente = slideElements[slideAttiva];
slideCorrente.classList.add('active');

let slideSuccessiva = slideElements[(slideAttiva + 1) % slideElements.length];
slideSuccessiva.classList.remove('active');

// let leftArrow = document.querySelector('.left-arrow')
// let rightArrow = document.querySelector('.right-arrow')

console.log(leftArrow, rightArrow)

rightArrow.addEventListener('click', function () {

    slideAttiva = (slideAttiva + 1) % slideElements.length;

    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');

    let slidePrecedente = slideElements[(slideAttiva + slideElements.length - 1) % slideElements.length];
    slidePrecedente.classList.remove('active');
})

leftArrow.addEventListener('click', function () {

    slideAttiva = (slideAttiva + 1) % slideElements.length;

    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');

    let slidePrecedente = slideElements[(slideAttiva + slideElements.length - 1) % slideElements.length];
    slidePrecedente.classList.remove('active');
})

const duration = setInterval(function() {

    slideAttiva = (slideAttiva + 1) % slideElements.length;

    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');

    let slidePrecedente = slideElements[(slideAttiva + slideElements.length - 1) % slideElements.length];
    slidePrecedente.classList.remove('active');

}, 2000);

setTimeout(function() {
    clearInterval(duration);
}, 2000 * images.length);