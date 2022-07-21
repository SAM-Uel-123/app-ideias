const number_buttons = document.getElementsByClassName('numbers')
const number_operators = document.getElementsByClassName('operators')
const entrada = document.getElementById('number_inputs')
const old_value = document.getElementById('old_value')
const operadores = ['+', '-', '/', '*']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
const operacoes = {
    '+' : function(a, b) { return a + b},
    '-' : function(a, b) { return a - b},
    '/' : function(a, b) { return a / b},
    '*' : function(a, b) { return a * b},
    '**' : function(a, b) { return a ** b},

}

entrada.addEventListener('input', () => {
    analizarEntrada(entrada.value);
})

entrada.addEventListener('keydown', (key) => {
    if (key['keyCode'] == 13) {
        calcular(entrada.value)
    }
})

var lista_valores = []
var valor_antigo = ''


for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener('click', () => {
        inserirValor(number_buttons[i].value)
    })
}


function contarCharsDuplicados(valor, duplicado) {
    const chars = {}
    for (const char in valor.toLowerCase()) {
        if (!chars[valor[char]]) {
            chars[valor[char]] = 1
        }
        else {
            chars[valor[char]] += 1
        }
    }
    if (chars[duplicado] > 1) {
        return chars[duplicado]
    }
    else {
        return 1
    }
}



function analizarEntrada(input) {
    let tmp_entrada = input
    let index = 0

    
    if(tmp_entrada.indexOf('x') > -1) {
        index = tmp_entrada.indexOf('x')
        if (contarCharsDuplicados(tmp_entrada.slice(index-2, index), '*') < 2 )  {
            tmp_entrada = tmp_entrada.replaceAll('x', '*')
        }
    }
    if(tmp_entrada.indexOf('^') > -1){
        tmp_entrada = tmp_entrada.replaceAll('^', '**')
    }

    for (let i in operadores) {
        if (true) {
            if ( tmp_entrada.slice(-3) == `${operadores[i]}**`) {
                let tmp_entrada1 = tmp_entrada.slice(0, -3)
                tmp_entrada = tmp_entrada1 + String(tmp_entrada.slice(-2))

            }
            else {
                for (let i in operadores) {
                    for (let i2 in operadores) {
                        if (tmp_entrada.slice(-2) == '**') {
                            continue
                        }
                        else if (tmp_entrada.slice(-2) == `${operadores[i]}${operadores[i]}`) {
                            tmp_entrada = tmp_entrada.slice(0, -1)
                        }
                        else if (tmp_entrada.slice(-2) == `${operadores[i]}${operadores[i2]}`) {
                            let ultimo_element = tmp_entrada.slice(-1)
                            tmp_entrada = tmp_entrada.slice(0, -2)
                            tmp_entrada += ultimo_element
                        }
                    }
                }
            }
        }

    }

    for (let i in tmp_entrada) {
        if (operadores.indexOf(tmp_entrada[i]) < 0 && numbers.indexOf(Number(tmp_entrada[i])) < 0) {
            tmp_entrada = tmp_entrada.replaceAll(tmp_entrada[i], '')
        }   
    }
    for (let i in tmp_entrada) {
        if ( String(tmp_entrada[i]) == '') {
            tmp_entrada.splice(i, 1)
        }
    }
    entrada.value = tmp_entrada
    escreverNaTela(entrada.value)
}


function inserirValor(valor) {
    if (numbers.indexOf(valor) > -1) {
        entrada.value += valor
        return
    } else {
        if ( valor == '*' && contarCharsDuplicados(entrada.value.slice(-2), valor) < 3 ) {
            entrada.value += valor
            return
        } else if ( contarCharsDuplicados(entrada.value.slice(-2), valor) < 3 ){
            entrada.value = `${entrada.value}${valor}`
            return 
        }
        return
    }
}


function clean() {
    entrada.value = ''
}


function backespace() {
    var entrada_apagada = ''

    for (let i in entrada.value) {
        if (i < entrada.value.length - 1) {
            entrada_apagada = `${entrada_apagada}${entrada.value[i]}`
        }
    }
    entrada.value = entrada_apagada
}


function floatNumber() {
    entrada.value += '.'
}


function operador(operador) {
    if (operadores.indexOf(entrada.value[entrada.value.length-1]) < 0 ) {
        entrada.value += operador        
    }
    else if (entrada.value[entrada.value.length-1] == '*') {
        let multiplicar =  contarCharsDuplicados(entrada.value, '*')
        if (multiplicar == 1 && operador == '*') {
            entrada.value += operador
        }
        else if (multiplicar == 2 && operador != '*') {
            backespace()
            backespace()
            entrada.value += operador
        }
    }
    else {
        backespace()
        entrada.value += operador
    }

}


function escreverNaTela(valor) {
    valor_antigo = entrada.value
    old_value.innerText = valor_antigo
    entrada.value = valor
}


function calcular( valor) {
    if (operadores.indexOf(valor[valor.length -1]) > 0) {
        return 
    }

    var resultado = 0
    for (let i2 in operadores) {
        if (valor.indexOf( operadores[i2] ) > -1) {
            valor = valor.replaceAll(operadores[i2], ` ${operadores[i2]} `)
        }
    }
    
    valor =  valor.split(' ')
    if (valor.length < 3) {
        return 
    }
    
    for (let i in valor) {
        if ( String(valor[i]) == '') {
            valor.splice(i,1)
        }
    }

    let valueA = 0
    let valueB = 0
    let valor_repetido = 0
    let contador = 0

    while (valor.length > 2) {
        if (resultado === valor_repetido) {
            contador += 1
        }
        if (contador > 3) {
            break
        }
        for (let c in valor) {
            if ( operadores.indexOf(valor[1]) > -1) {
                if ( Number(valor[0]) ) {
                    valueA = Number(valor[ 0 ])
                } else {
                    valueA = valor[0]
                }
                if ( Number(valor[2]) ) {
                    valueB = Number(valor[ 2 ]) 
                } else {
                    valueB = valor[2]
                }
                if (valor[1] != '*') {
                    resultado = operacoes[valor[1]](valueA, valueB)
                } else if ( valor[1] == '*') {
                    if (valor[2] == '*') {
                        resultado = valueA ** (Number(valor[ 3 ]))
                    } else {
                        resultado = valueA * valueB
                    }
                }
                if (valor [1] == '*' && valueB == '*') {
                    valor.shift(0)
                }
                valor.shift(0)
                valor.shift(0)
                valor.shift(0)
                if (valor.length > 0) {
                    valor = valor.reverse()
                    valor.push(resultado)
                    valor = valor.reverse()
                } else {
                    valor.push(resultado)
                }
            }
            continue
        }
        valor_repetido = resultado
    }
    if (String(resultado).length > 8) {
        resultado = String(resultado).slice(0, 9)
    }
    escreverNaTela(resultado)
}

