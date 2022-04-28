import { valida } from "./validacao.js"

const inputs = document.querySelectorAll('input, select')

inputs.forEach(input => {

    input.addEventListener('blur', event => {
        event.preventDefault()

        const monitoramento = event.target
        valida(monitoramento)

        // console.log("Eu estou monitorando esse input: ", monitoramento)

    })
})