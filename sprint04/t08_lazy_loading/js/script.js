'use strict';

let counter = 0;
let images = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
    './assets/images/5.jpg',
    './assets/images/6.jpg',
    './assets/images/7.jpg',
    './assets/images/8.jpg',
    './assets/images/9.jpeg',
    './assets/images/10.jpeg'
]
function map(img) {
    document.querySelector('#images').insertAdjacentHTML('beforeend',
        `<img class="image lazy" src="./assets/images/temp.gif" data-src="${img}" alt="${img}">`)
}

function add() {
    counter += 1;
    document.querySelector('#counter').innerHTML = counter;
    if (counter === 10) {
        const div = document.querySelector('.counter');
        div.style.background = 'green';
        setTimeout(() => {
            div.style.display = 'none';
        }, 3000);
    }
}

images.map(map);

const imgAll = document.querySelectorAll('.lazy');

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                const lazyImg = entry.target;
                lazyImg.src = lazyImg.dataset.src;
                lazyImg.style.width = '600px';
                lazyImg.classList.remove('lazy');
                imgObserver.unobserve(lazyImg);
                add();
            }
        })
    })
    imgAll.forEach((lazyImage) => imgObserver.observe(lazyImage));
}
