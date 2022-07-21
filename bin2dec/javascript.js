function validarEntradaBinaria(entrada) {
    for (valor in entrada) {
        //console.log(entrada[valor])
        if (entrada[valor] != 0 && entrada[valor] != 1) {
            return false
        }
    }
    return entrada
}


function inverterSequenciaNumerica(sequencia) {
    var sequencia_invertida = ''
    for (let index = sequencia.length -1; index > -1; index --) {
        sequencia_invertida += sequencia[index]
    }
    return sequencia_invertida

}


function calcular(valor_binario) {
    if (validarEntradaBinaria (valor_binario)) {
        if (valor_binario.length > 8) {
            window.alert(' Insira um valor que tenha q qunatidade de 0 e 1 igual ou menor que 8')
            return 
        }

        valor_binario = inverterSequenciaNumerica(valor_binario)
        let soma = 0
        for (const valor in valor_binario) {
            if (valor_binario[valor] == 1) {
                soma += (Number.parseInt(valor_binario[valor]) * 2) ** valor
            }
        }
    
        const divsaida = document.querySelector('section > div#saida')
        divsaida.innerHTML = ''

        const resposta = document.createElement('p')
        resposta.setAttribute('id', 'decodificado')
        resposta.innerHTML = ` A soma de ${valor_binario} é: ${soma}`

        divsaida.appendChild(resposta)

    }    
    else {
        alert(' Você inseriu valores que não correnpondem a base binaria, por favor insira somente 0 ou 1')
    }
} 