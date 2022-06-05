const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const btnRestart = document.querySelector('.btn-restart')
const placarPoints = document.querySelector('.counterPoints')
var highScore = 0
var pointsCounter = 0


const contador = ()=>{
    var points = pointsCounter
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 180){
        placarPoints.textContent.valueOf = pointsCounter
        pointsCounter = eval(points +  10)
        console.log('pulou!')
    }
    else{
        console.log('não valeu!')
    }
}

const restartAnimation = ()=>{
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

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")

    
    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80  ){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.style.width = '50px'
        mario.style.marginLeft = '45px'
        mario.src = './imagens/game-over.png'
        
        highScore = highScore < pointsCounter ? `High Score:${pointsCounter}` : `High Score:${highScore}`;
        console.log(highScore)
        clearInterval(loop)
        restartAnimation()
        console.log('Perdeu!')
    }
    else{
        placarPoints.innerHTML = pointsCounter
    }

}, 10 )

document.addEventListener('touchstart', jump)
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', contador)
document.addEventListener('keydown', contador)