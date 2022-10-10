const Menu = ($nav) => {
    document.addEventListener('click', (event) => {
        if (event.target.matches('#btn-nav')) $nav.classList.add('nav-is-active');
        if (event.target.matches('#btn-menu')) $nav.classList.remove('nav-is-active');
        if (event.target.matches('.header-nav-menu__li *')) $nav.classList.remove('nav-is-active');
    });
}
export default Menu;   