const mario = document.querySelector('.mario')
const looser = document.querySelector('.looser')
const pipe = document.querySelector('.pipe')
const btnRestart = document.querySelector('.btn-restart')
const placarPoints = document.querySelector('.counterPoints')
const temporizador = document.querySelector('.counterTime')
const grama = document.querySelector('.grama')
var highScore = 0
var pointsCounter = 0
var timer = 320


function restart(event){
    
    pipe.style.animationName = 'none!important'
    
    requestAnimationFrame(()=>{
        pipe.style.animationName = ""
    })
}

const contador = ()=>{
    var points = pointsCounter
    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition <= 360 ){
        placarPoints.textContent.valueOf = pointsCounter
        pointsCounter = eval(points +  10)
        console.log('pulou!')
    }
    else{
        console.log('não valeu!')
    }
}
const restartGame = ()=>{
    console.log("Acabou!")
    btnRestart.classList.add('visible')
    btnRestart.classList.remove('invisible')
    btnRestart.classList.add('fade')
}
const jump = ()=>{
    
    mario.classList.add('jump')
    
    setTimeout(()=>{
        mario.classList.remove('jump')
        
    }, 500)
}
const contadorRegressivo = setInterval(()=>{
    
    var contador = eval(timer - 1)
    timer = contador
    
},1000)

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")
    
    
    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80  ){
        
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.style.width = '50px'
        mario.style.marginLeft = '45px'
        mario.src = './imagens/game-over.png'
        
        looser.src = './imagens/looser.webp'
        looser.classList.add('fade')
        looser.style.bottom = `${marioPosition + 20}px `
        
        grama.style.animation = 'none';
        
        highScore = highScore < pointsCounter ? `High Score:${pointsCounter}` : `High Score:${highScore}`;
        console.log(highScore)
        clearInterval(loop)
        clearInterval(contadorRegressivo)
        restartGame()
        console.log('Perdeu!')
    }
    else{
        placarPoints.innerHTML = pointsCounter
        temporizador.innerHTML = timer
    }

}, 10 )

document.addEventListener('touchstart', jump)
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', contador)
document.addEventListener('keydown', contador)
btnRestart.addEventListener("click", restart, false)