const entradas = window.document.getElementsByClassName('raio')
const div_codigo = window.document.getElementById('codigo')
div_codigo.style.color = 'black'
div_codigo.text = 'Entrada de valores'

for (let index = 0; index < entradas.length; index ++) {
    entradas[index].addEventListener('input', atualizarValores)
}


function atualizarValores() {
    var codigo = '<br>'
    for (let i in entradas) {
        mudarRaio(entradas[i].id, entradas[i].value)
        if (Number.parseInt(entradas[i].value)) {
            codigo += entradas[i].id + '-radius: ' + entradas[i].value + 'px ' + ' <br> '
        }
    }
    adicionarCodigo(codigo)
}


function adicionarCodigo(codigo) {
    div_codigo.innerHTML = codigo
    div_codigo.style.textAlign = 'left'    
}


function mudarRaio(direcao, valor) {
    const quadrado = document.getElementById('entrada')

    if (!valor || valor == 'undefined') {
        valor = '0'
    }
    
    valor += 'px'

    if (direcao === 'border-top-left') {
        quadrado.style.borderTopLeftRadius = valor
    }
    else if (direcao === 'border-top-right') {
        quadrado.style.borderTopRightRadius = valor
    }
    else if (direcao === 'border-bottom-left') {
        quadrado.style.borderBottomLeftRadius = valor
    }
    else if (direcao === 'border-bottom-right') {
        quadrado.style.borderBottomRightRadius = valor
    }
}

