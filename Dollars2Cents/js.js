quartersLabel = document.getElementById('quartersLabel')
dimesLabel = document.getElementById('dimesLabel')
nickelsLabel = document.getElementById('nickelsLabel')
penniesLabel = document.getElementById('penniesLabel')
dollarInput = document.getElementById('dollarInput')

dollarInput.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        calcularCents(dollarInput.value)
    }
})


function updateQuantCoins(quarter, dime, nickel, pennie) {
    quartersLabel.innerText = `Quarters: ${quarter}`
    dimesLabel.innerText = `Dimes: ${dime}`
    nickelsLabel.innerText = `Nickels: ${nickel}`
    penniesLabel.innerText = `Pennies: ${pennie}`
}


function calcularCents(Dollar) {
    Dollar = Number(Dollar)
    let quartersQuant = 0
    let dimesQuant = 0
    let nickelsQuant = 0
    let penniesQuant = 0
    let tmpVal = Math.fround( Dollar * 100 )
    console.log(tmpVal)
    
    if (tmpVal >= 25) {
        quartersQuant = Math.fround( Number.parseInt( tmpVal / 25 ) )
        tmpVal = Math.fround( tmpVal % 25 )
    }
    if (tmpVal >= 10) {
        dimesQuant = Math.fround( Number.parseInt ( tmpVal / 10 ) )
        tmpVal = Math.fround( Number.parseInt( tmpVal % 10) )
    }

    if (tmpVal >= 5) {
        nickelsQuant = Math.fround( Number.parseInt( tmpVal / 5 ) )
        tmpVal = Math.fround( tmpVal % 5)
    }
    if ( tmpVal >= 1) {
        penniesQuant = Math.fround( tmpVal / 1 )
        tmpVal = tmpVal % 1
    }
            
    updateQuantCoins(quartersQuant, dimesQuant, nickelsQuant, penniesQuant)
}