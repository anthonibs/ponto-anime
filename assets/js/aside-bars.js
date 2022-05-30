const btnAbrir = document.querySelector('.menu-icone')
const menu = document.querySelectorAll('.aside__menu-admin')
const menuBi = document.querySelector('.menu-icone .bi')


for (let i = 0; menu.length > i; i++) {
    btnAbrir.addEventListener('click', function () {
        menu[i].classList.toggle('aside__menu-admin--hide')

        if (menuBi.getAttribute('class') == 'bi bi-chevron-bar-left') {
            menuBi.getAttribute('class', 'bi bi-chevron-bar-left')
            menuBi.setAttribute('class', 'bi bi-chevron-bar-right')

        } else if (menuBi.getAttribute('class') == 'bi bi-chevron-bar-right') {
            menuBi.getAttribute('class', 'bi bi-chevron-bar-right')
            menuBi.setAttribute('class', 'bi bi-chevron-bar-left')
        }

    })
}
