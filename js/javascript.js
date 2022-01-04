
const divMenu = [...document.querySelectorAll('.image-box')];

const open = () => {
    divMenu.forEach(item => item.classList.add('site-menu__div'));
    console.log('ok');
}


divMenu.forEach(item => item.addEventListener('click', open));
