var imageArq = document.getElementById('imageTest')
var imageArqOriginal =  document.getElementById('imageTestOriginal')
var x = 1
var y = 1

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


function rotation(imageElement = imageArq, X = 1, Y = 1) {
    imageElement.style.transform = `scaleX(${x}) scaleY(${y})`
}


function rotationUp(imageElement = imageArq) {
    y = 1
    rotation(imageElement, x, y)
}


function rotationDown(imageElement = imageArq) {
    y = -1
    rotation(imageElement, x, y)
}


function rotationLeft(imageElement = imageArq) {
    x = -1
    rotation(imageElement, x, y)
}


function rotationRight(imageElement = imageArq) {
    x = 1
    rotation(imageElement, x, y)
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