let offset = 0;
let circleCount = 0;
const sliderLine = document.querySelector('.slider-line');
const circle = document.querySelector('.slider__progres-circle');

document.querySelector('.slider__btn.next').addEventListener('click', function () {
    offset += 100;
    if (offset > 300) {
        offset = 0;
    }
    sliderLine.style.right = offset + '%';
});
document.querySelector('.slider__btn.prev').addEventListener('click', function () {
    offset -= 100;
    if (offset < 0) {
        offset = 300;
    }
    sliderLine.style.right = offset + '%';
});


document.querySelector('.c-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
    } else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
    }
})