const btnShowPassword = document.querySelector('.admin-area__icon')
const typeInput = document.getElementById('admin_password')
const iconEye = document.querySelector('.bi')

function changeClass(isOpenEye, isClosedEye) {
  iconEye.classList.remove(isOpenEye);
  iconEye.classList.add(isClosedEye);
}


btnShowPassword.addEventListener("click", () => {
  if (typeInput.getAttribute('type') == 'password') {
    typeInput.setAttribute("type", "text");
    changeClass("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    typeInput.setAttribute("type", "password");
    changeClass("bi-eye-slash-fill", "bi-eye-fill");
  }
})
