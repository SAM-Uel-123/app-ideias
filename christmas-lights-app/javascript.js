
const lights = document.getElementsByClassName('light')
const lights_lenght = lights.length


function onLights() {
    for (let i = 0; i < lights_lenght; i ++) {
        lights[i].removeAttribute('style')
    }
    
}


function offLights() {
    for (let i = 0; i < lights_lenght; i ++) {
        lights[i].style.animation = 'none'
        lights[i].style.background = '#940194'
    }
}


function changeSpeed() {
    const interval = document.getElementById('interval')
    for (let i = 0; i < lights_lenght; i ++) {
        lights[i].style.animationDuration = interval.value + 's'
    }
}