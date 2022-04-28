export function valida(input) {
    const typeInput = input.dataset.type

    if (validadores[typeInput]) {
        validadores[typeInput][input]
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('error-message')
        input.parentElement.querySelector('.error-message__inpunt').innerHTML = ''
    } else {
        input.parentElement.classList.add('error-message')
        input.parentElement.querySelector('.error-message__inpunt').innerHTML = mostraMensagemDeErro(typeInput, input)
    }

}

const typeError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const errorMessages = {
    name: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e uma minuscula e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    gender: {
        valueMissing: 'O campo de sexo não pode estar vazio.',
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

console.log(validadores)

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    typeError.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = errorMessages[tipoDeInput][erro]
        }
    })

    return mensagem
}


function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem) // envia mensagem se foi validado ou não no input
}


// confere se a pessoa cadastrando tem a idade maior que 18 anos
function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
