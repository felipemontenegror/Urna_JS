let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0
let numero = ''

function startEtapa() {
    let etapa = etapas[etapaAtual]  //Funcao onde a variável etapa recebe o array dos candidatos a presidencia

    let numeroHtml = ''

    for(let i=0; i<etapa.numeros; i++) {    // laço for para incrementar o numero de deigitos para o tipo de candidato
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none'   //limpando os espaços
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function atualizaInterface() {
    alert('finalizou')
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if(elNumero !== null)
        elNumero.innerHTML = n
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
        
}
function branco() {
    alert('clicou em branco')
}
function corrige() {
    alert('clicou em corrige')
}
function confirma() {
    alert('clicou em confirma')
}

startEtapa()