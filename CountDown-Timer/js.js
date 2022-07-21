var alarm = document.getElementById('alarm')
/*
var daysCount = alarm.children[0]
var houCount = alarm.children[1]
var minCount = alarm.children[2]
var secCount = alarm.children[3]
*/
var daysCount = document.getElementById('daysCount')
var houCount = document.getElementById('hourCount')
var minCount = document.getElementById('minCount')
var secCount = document.getElementById('secCount')

var dateFor = null
var now = null
var dispertarLabel = document.getElementById('dispertarLabel')

var contador_sec = 0, contador_min = 0, contador_hor = 0, contador_day = 0
var dias, horas, minutos, segundos, ano, mes

var contando = false
var contadorId = 0


function startB() {
    if (!contando) {
        contando = true
        now = new Date()
        ano = now.getFullYear()
        mes = Number.parseInt(now.getMonth()) +1        
        dias = now.getDate()
        horas = now.getHours()
        minutos = now.getMinutes()
        segundos = now.getSeconds()
        now = now.getTime()

        inputDate = document.getElementById('date-for').value
        if (!inputDate) {
            alert(' Data invalida: defina somente datas apartir de hoje')
            return 0
        }
        
        inputDate = inputDate.replaceAll('-', ',')
        dateFor = new Date( inputDate )
        inputDate = inputDate.split(',')

        if ( inputDate [0] <= ano && inputDate [1] <= mes && inputDate[2] <= dias) {
            alert(' Data invalida: defina somente datas apartir de hoje')
            timeRestart()
            return 0
        }

        distancia = dateFor.getTime() - now
        contador_day = Math.floor(distancia / (1000 * 60 * 60 * 24) )
        contador_hor = Math.floor( (distancia % (1000 * 60 * 60  * 24)) / (1000 * 60 * 60) )
        contador_min = Math.floor( (distancia % (1000 * 60 * 60)) / (1000 * 60) )
        contador_sec = Math.floor( (distancia % (1000 * 60)) / (1000 ))

        start(dias, horas,  minutos, segundos)
    }
}


function stopB() {
    if (contando) {
        clearTimeout(contadorId)
        clearInterval(contadorId)
        alert('parando a contagem')
        contando = false
    }
}


function timeRestart() {
    contador_hor = 0
    contador_min = 0
    contador_sec = 0
    contando = false
    clearTimeout(contadorId);
    updateWindow()
}


function updateWindow() {
    daysCount.innerHTML = String(contador_day).length == 1 ? `0${contador_day}` : contador_day
    houCount.innerHTML = String(contador_hor).length == 1? `0${contador_hor}` : contador_hor
    minCount.innerHTML = String(contador_min).length == 1? `0${contador_min}` : contador_min
    secCount.innerHTML = String(contador_sec).length == 1? `0${contador_sec}` : contador_sec
}


function start(days, hour, minutes, seconds) {
    contadorId = setTimeout( () => {
        contador_sec -= 1;
        if (contador_sec <= 0 && contador_min > 0) {
            contador_sec = 60;
            contador_min -= 1;
        }
        if (contador_min <= 0 && contador_hor > 0) {
            contador_min = 60;
            contador_hor -= 1;
        }
        if (contador_hor <= 0 && contador_day > 0) {
            contador_hor = 23
            contador_day -= 1
        }

        if (contador_hor <= 0 && contador_min <= 0 && contador_sec <= 0) { 
            dispertarLabel.innerHTML = ' Fim da contagem '
            timeRestart();
            return 1;
        }
        updateWindow();
        start(days = days, hour = hour,minutes = minutes, seconds = seconds);
    }, 1000)
}



