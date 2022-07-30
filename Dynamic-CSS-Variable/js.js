
let inputUserId = document.getElementById('userId')
let inputPassword = document.getElementById('passwordInput')


let userIdTest = 'testuser'
let passwordTest = 'mypassword'

let backgroundColorDefault = 'white'
let fontColorDefault = 'black'
let lightRed = '#ff3030'
let lightYellow = '#f9fb43'
let alertColorFont = 'black'
let alertColorFontCorrect = '#464fff'

function validar(users, passw) {
    if (users == userIdTest && passw == passwordTest) {
        console.log(' Usuario valido.')
        alertCredentialsCorrect('alertDiv')
        return true
    } else if (!users || !passw) {
        console.log(' Entrada(s) vazias')
        alertInputsEmpty('alertDiv')
        return false
    }
    
    else {
        console.log(' Credenciais invalidas')
        alertCredentialsIncorrect('alertDiv')
        return false
    }
}


function alertDivCreate(id) {
    let createdDivAlert = document.getElementById(id)
    if (!createdDivAlert && createdDivAlert === null) {
        createdDivAlert = document.createElement('div')
        createdDivAlert.setAttribute('id', id)
        document.body.appendChild(createdDivAlert)
    }
    return createdDivAlert    
}


function alertInputsEmpty(idDiv) {
    let divAlert = alertDivCreate(idDiv)
    divAlert.style.backgroundColor = lightYellow
    divAlert.style.color = alertColorFont
    divAlert.style.textAlign = 'center'
    divAlert.innerText = 'Entradas Vazias.'
    changeColorInputBox(lightYellow, alertColorFont)
}


function alertCredentialsIncorrect(idDiv) {
    let divAlert = alertDivCreate(idDiv)

    divAlert.style.backgroundColor = lightRed
    divAlert.style.color = alertColorFont
    divAlert.style.textAlign = 'center'
    divAlert.innerText = 'Credenciais incorretas.'
    changeColorInputBox(lightRed, alertColorFont)
}


function alertCredentialsCorrect(idDiv) {
    let divAlert = alertDivCreate(idDiv)
    let lightGreen = '#3cff53'
    divAlert.style.backgroundColor = lightGreen
    divAlert.style.color = alertColorFontCorrect
    divAlert.style.textAlign = 'center'
    divAlert.innerText = 'Credenciais corretas, login efetuado com sucesso.'
    changeColorInputBox(lightGreen, alertColorFontCorrect)
}


function cancelLogin(idDiv) {
    tmpId = idDiv.id
    idDiv.remove()
    alertDivCreate(tmpId)
    changeColorInputBox ()
}

function changeColorInputBox(colorBG = backgroundColorDefault, colorFont = fontColorDefault) {
    inputPassword.style.backgroundColor = colorBG
    inputUserId.style.backgroundColor = colorBG
    
    inputPassword.style.color = colorFont
    inputUserId.style.color = colorFont
}