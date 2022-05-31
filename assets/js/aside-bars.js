const btnOpenSide = document.querySelector('.btn__menu-aside')
const menu = document.querySelectorAll('.aside__menu-admin')
const changeIcon = document.querySelector('.btn__menu-aside .bi')
const changeLogo = document.querySelector('.dashboard__logo-img')
const dashboardSearch = document.querySelector('.dashboard__research')
const dashboardLink = document.querySelectorAll('.dashboard__link')

for (let i = 0; i < menu.length; i++) {
    btnOpenSide.addEventListener('click', function () {
        menu[i].classList.toggle('disabled-display')

        function changeAttrClass(first, second) {
            changeIcon.getAttribute('class', first )
            changeIcon.setAttribute('class', second)
        }
        
        function changeAttrSrc(first, second) {
            changeLogo.getAttribute('src', first )
            changeLogo.setAttribute('src', second)
        }
        
        if (changeIcon.getAttribute('class') == 'bi bi-chevron-bar-left') {
            changeAttrClass('bi bi-chevron-bar-left', 'bi bi-chevron-bar-right')
            changeAttrSrc('/assets/images/logo-ponto-animes-admin-01.svg', '/assets/images/logo-ponto-animes-admin-02.svg')

            dashboardSearch.classList.add('disabled-display')
            dashboardLink[i].classList.toggle('justify__center')

        } else if (changeIcon.getAttribute('class') == 'bi bi-chevron-bar-right') {
            changeAttrClass('bi bi-chevron-bar-right', 'bi bi-chevron-bar-left')
            changeAttrSrc('/assets/images/logo-ponto-animes-admin-02.svg', '/assets/images/logo-ponto-animes-admin-01.svg')

            dashboardSearch.classList.remove('disabled-display')
            dashboardLink[i].classList.toggle('justify__center')
        }

    })
}