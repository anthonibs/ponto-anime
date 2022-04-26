const BTN_LOG = document.getElementById('btn__login')
const MODAL_LOG = document.querySelector('.header__modal-login')
const CLOSED_MODAL = document.querySelectorAll('.btn__closed-modal')
const OVERLAY_MODAL = document.querySelector('.overlay__modal')

BTN_LOG.addEventListener('click', () => {
    MODAL_LOG.style.display = 'block'
    OVERLAY_MODAL.style.display = 'block'
})


CLOSED_MODAL.forEach(btn => {
    btn.addEventListener('click', () => {
        MODAL_LOG.style.display = 'none'
        OVERLAY_MODAL.style.display = 'none'
    })
})
