const par = document.querySelector('.parlax');
const front = document.querySelector('.Front');
const bak = document.querySelector('.Back');

const sFront = 2000;
const sBack = 900;


par.addEventListener('mousemove', e => {

    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
    translate(
        ${x / sFront}%,
        ${y / sFront}%
    )`;

    bak.style.transform = `
    translate(
        ${x / sBack}%,
        ${y / sBack}%
    )`;

});
