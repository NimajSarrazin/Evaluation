const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
// const menu= document.querySelector('.menu')


toggle.addEventListener('click', ()=> {
    body.classList.toggle('open');
});


// menu.addEventListener('click', () => {
//     menu.classList.toggle('open');
// });