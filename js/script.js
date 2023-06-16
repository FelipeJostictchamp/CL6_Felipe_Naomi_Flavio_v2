const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;   /* += damit es in eine andere richtung geht*/
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; /* -= damit es in eine andere richtung geht*/
    })
})