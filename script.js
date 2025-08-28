const html = document.querySelector('html')

const botaoIniciar = document.querySelector('.app__card-primary-button')
const focoBt           = document.querySelector('.app__card-button--foco')
const curtoBt          = document.querySelector('.app__card-button--curto')
const longoBt          = document.querySelector('.app__card-button--longo')
const banner           = document.querySelector('.app__image')
const titulo           = document.querySelector('.app__title')
const botoes           = document.querySelectorAll('.app__card-button')
const musicaFocoInput  = document.querySelector('#alternar-musica')
const musica           = new Audio('/sons/luna-rise-part-one.mp3')
const volumeInput      = document.querySelector('#volume-musica')

let tempoDecorridoEmSegundos = 5

musica.loop = true

musica.volume = volumeInput.value / 100


volumeInput.addEventListener('input', () => {
    musica.volume = volumeInput.value / 100
})

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    }
    else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')

})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')

})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')

})

function alterarContexto(contexto) {
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
                Otimize seus estudos,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
        	`
            break;
        case 'descanso-curto': 
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong"> Faça uma pausa curta </strong>
            ` 
            break;
        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície <strong class="app__title-strong"> Faça uma pausa longa </strong>
            ` 
        default:
            break;
    }
}



/* const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 


const displayTempo = document.querySelector('#timer');
const titulo = document.querySelector('.app__title'); */