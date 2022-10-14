let hamb = document.querySelector('#hamb')
let popup = document.querySelector('.popup')
let menu = document.querySelector('.menu').cloneNode('1');
let body = document.body

let slideIndex =  1;



// -----BURGER----- //

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active")
    body.classList.toggle("noscroll")
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

document.addEventListener('click', outsideEvtListener);

function outsideEvtListener(evt) {
    if (evt.target === popup || popup.contains(evt.target)) {
        popup.classList.toggle("open");
        hamb.classList.toggle("active")
        body.classList.toggle("noscroll")
    }
}


// ----------END BURGER----------- //

let images = document.querySelectorAll('.slider-line img');
let sliderLine = document.querySelector('.slider-line');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let count = 0;
let width;


