var entrada = document.getElementById('entrada')
var resultado = document.getElementById('resultado')

function JSONforCSV(jsonEntrada) {
    console.log( String(jsonEntrada) )
    let tmpJSON = null
    if (typeof (jsonEntrada) != 'object') {
        try {
            tmpJSON = JSON.parse(jsonEntrada)
        } catch (error) {
            return false
        }
            
        
        if (typeof(tmpJSON) != 'object') {
            tmpJSON = tmpJSON.replaceAll('[', '')
            tmpJSON = tmpJSON.replaceAll(']', '')
            let tmpArray = tmpJSON.split('},')
            let Array = []
            for (let i in tmpArray) {
                let tmpV = tmpArray[i]
                if (tmpV.slice(-1) != '}') {
                    tmpV += '}'
                }
                Array.push( JSON.parse( tmpV ) )
            }
        }
    }
    else {
        tmpJSON = jsonEntrada
    }
    let tmpCSV = []
    let keys = Object.keys(tmpJSON[0])
    for (let i in keys) {
        tmpCSV.push(`"${keys[i]}"`)
    }
    tmpCSV.push('\n')
    for (let i in tmpJSON) {
        let tmpJSON2 = tmpJSON[i]
        for (i2 in tmpJSON2) {
            tmpCSV.push( `"${tmpJSON2[i2]}"` )
        }
        tmpCSV.push('\n')
    }

    let CSVs = tmpCSV
    return CSVs
}

function converterJSONforCSV(CSVvalor){
    CSVvalor = CSVvalor.trim()
    if (!CSVvalor) {
        alert(' Caixa Vazia')
        return
    }
    if (CSVvalor.indexOf('<br>') > -1) {
        CSVvalor = CSVvalor.replaceAll('<br>', '')
    }
    CSVs = JSONforCSV(CSVvalor)
    if ( typeof(CSVs) == 'object') {
        updateWindow(CSVs)
    }    

    else {
        alert(' Valores invalidos')
    }

}

function updateWindow(CSVvalor) {
    let valor = ''
    for (let i in CSVvalor) {
        let val = CSVvalor[i]
        if (val == '\n') {
            valor = valor.slice(0, -2)
            val = '<br>'
        }
        else {
            val += ', '
        }
        valor += val

    }
    resultado.innerHTML = valor 
}