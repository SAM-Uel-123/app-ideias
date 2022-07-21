var entrada = document.getElementById('entrada')
var resultado = document.getElementById('resultado')

function CSVforJSON(csvEntrada) {
    let tmpCsv = csvEntrada.trim()
    tmpCsv = tmpCsv.split('\n')
    
    for (let i in tmpCsv) {
        if ( tmpCsv[i].indexOf('"') > -1) { 
            tmpCsv[i] = tmpCsv[i].replaceAll('"', '')
        }
        if ( tmpCsv[i].indexOf('\\') > -1) {
            tmpCsv[i] = tmpCsv[i].replaceAll('\\', '')
        }
    }

    let keys = tmpCsv[0].split(',')
    for (let i in keys) {
        keys[i] = keys[i].trim()
    }
    let JSONs = []
    let obj = {}
    tmpCsv.shift()
    let Csv = []
    for (let i in tmpCsv) {
        let c = tmpCsv[i].split(',')
        c[0].split(',')
        let c2 = []
        for (i in c) {
            c2.push(c[i].trim())
        }
        Csv.push(c2)

    }
    tmpCsv = Csv
    
    while (tmpCsv.length > 0) {
        for (let i in tmpCsv) {
            for (let i2 = 0; i2 < keys.length; i2 ++) {
                let key = keys[i2]
                if (tmpCsv[i][i2]) {
                    obj[key] = String(tmpCsv[i][i2])
                }
                else {
                    obj[key] = ""
                }
            }
            JSONs.push(obj)
            obj = {}
        }
        for (let i in JSONs) {
            tmpCsv.shift()
        }
    }
    return JSONs
}

function converterCSV(CSVvalor){
    CSVvalor = CSVvalor.trim()
    if (!CSVvalor) {
        alert(' Caixa vazia')
        return false
    }
    JSONs = CSVforJSON(CSVvalor)
    if (JSONs.length > 0) {
        console.log(JSONs)
        updateWindow(JSONs)
    }
    else {
        alert(' valores invalidos')
    }
    
}

function updateWindow(JSONvalor) {
    
    let valor = '['
    for (let i in JSONvalor) {
        valor += '{'
        let JSONs = JSONvalor[i]
        if (JSONs[""] == "") {
            valor = ''
            break
        }
        for (let ii in JSONs) {
            valor += `"${ii}" : "${JSONs[ii]}"`
            valor += ','

        }
        valor = valor.slice(0, -1)
        valor += '},'
    }
    valor = valor.slice(0, -1)
    if (valor) {
        
        valor += ']'
    }
    resultado.innerHTML = valor 
}