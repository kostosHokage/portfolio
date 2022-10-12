let hamb = document.querySelector('#hamb')
let popup = document.querySelector('.popup')
let menu = document.querySelector('.menu').cloneNode('1');
let body = document.body

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



