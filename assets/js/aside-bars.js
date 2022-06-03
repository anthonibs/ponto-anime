const btnOpenSide = document.querySelector('.btn__menu-aside')
const menu = document.querySelectorAll('.aside__menu-admin')
const changeIcon = document.querySelector('.bi')
const changeLogo = document.querySelector('.dashboard__logo-img')
const dashboardSearch = document.querySelector('.dashboard__research')
const dashboardLink = document.querySelectorAll('.dashboard__link')
const btnNotification = document.querySelector('.dashboard__notification .bi')

function changeAttr(first, second, variable, type) {
    variable.getAttribute(type, first)
    variable.setAttribute(type, second)
  }


for (let i = 0; i < menu.length; i++) {
    btnOpenSide.addEventListener('click', function () {
        menu[i].classList.toggle('disabled-display')
                
        if (changeIcon.getAttribute('class') == 'bi bi-chevron-bar-left') {
          
            changeAttr('bi bi-chevron-bar-left', 'bi bi-chevron-bar-right', changeIcon, 'class')

            changeAttr('/assets/images/logo-ponto-animes-admin-01.svg','/assets/images/logo-ponto-animes-admin-02.svg', changeLogo, 'src')

            dashboardSearch.classList.add('disabled-display')
            dashboardLink[i].classList.toggle('justify__center')

        } else if (changeIcon.getAttribute('class') == 'bi bi-chevron-bar-right') {
        
            changeAttr('bi bi-chevron-bar-right', 'bi bi-chevron-bar-left', changeIcon, 'class')

            changeAttr('/assets/images/logo-ponto-animes-admin-02.svg','/assets/images/logo-ponto-animes-admin-01.svg', changeLogo, 'src')

            dashboardSearch.classList.remove('disabled-display')
            dashboardLink[i].classList.toggle('justify__center')
        }
    })
}


// Enable and disable notification
btnNotification.addEventListener('dblclick', function() {

    const notification = document.querySelector('.number-notification')

    if(btnNotification.getAttribute('class') == 'bi bi-bell-fill') {

        changeAttr('bi bi-bell-fill', 'bi bi-bell-slash-fill', btnNotification, 'class')
    
        notification.style.visibility = 'hidden'

    } else if(btnNotification.getAttribute('class') == 'bi bi-bell-slash-fill') {
        
        changeAttr('bi bi-bell-slash-fill', 'bi bi-bell-fill', btnNotification, 'class')

        notification.style.visibility = 'visible'

    }
})