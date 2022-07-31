var imageArq = document.getElementById('imageTest')
var imageArqOriginal =  document.getElementById('imageTestOriginal')
var angulo = 1
var X = 1
var Y = 1

function exibirImagem(url) {
    url = url.trim()
    if (url) {
        try {
            let valid = new URL(url)
            imageArq.src = url
            imageArqOriginal.src = url
            return true
    
        } catch {
            window.alert('erro, imagem não encontrada')
            return false
 
        }

    } else {
        window.alert('Entrada vazia')
    }
}


function inverter(imageElement = imageArq, x = X, y = Y, Angulo = angulo) {
    imageElement.style.transform = `rotate(${Angulo}deg) scaleX(${x}) scaleY(${y})`
}


function inverterUp(imageElement = imageArq) {
    Y = 1
    inverter(imageElement, X, Y)
}


function inverterDown(imageElement = imageArq) {
    Y = -1
    inverter(imageElement, X, Y)
}



function inverterLeft(imageElement = imageArq) {
    X = -1
    inverter(imageElement, X, Y)
}


function inverterRight(imageElement = imageArq) {
    X = 1
    inverter(imageElement, X, Y)
}



function rotation(imageElement = imageArq, Angulo = angulo, x = X, y = Y) {
    imageElement.style.transform = ` rotate(${Angulo}deg) scaleX(${x}) scaleY(${y})`
}


function rotationLeft(imageElement = imageArq) {
    if (angulo > -360) {
        angulo -= 1
        rotation(imageElement, angulo)
    }

}


function rotationRight(imageElement = imageArq) {
    if (angulo < 360) {
        angulo += 1
        rotation(imageElement, angulo)
    }
}



var controlsBTNs = document.getElementById('controlsBTNs').childNodes
var upBTN = controlsBTNs[0]
var downBTN =  controlsBTNs[1]
var leftBTN = controlsBTNs[2]
var rightBTN = controlsBTNs[3]

document.body.addEventListener('keyup', (keypressed) => {
    console.log(keypressed['key'])
    if (keypressed.key == 'ArrowUp') {
        rotationUp()
    }
    else if (keypressed.key == 'ArrowDown') {
        rotationDown()
    }
    else if (keypressed.key == 'ArrowLeft') {
        rotationLeft()
    }
    else if (keypressed.key == 'ArrowRight') {
        rotationRight()
    }
})