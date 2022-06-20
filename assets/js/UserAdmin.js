const addUser = document.querySelector('[add-User]')
const closedCadUser = document.querySelector('[closed-Cad-User]')



addUser.addEventListener('click', () => {
    const cadUser = document.querySelector('.addUser')
    const overlay = document.querySelector('.overlay-cad')
    cadUser.style.display = 'flex'

    closedCadUser.addEventListener('click', ()=> {
        cadUser.style.display = 'none'
    })

    overlay.addEventListener('click', ()=> {
        cadUser.style.display = 'none'
    })

})