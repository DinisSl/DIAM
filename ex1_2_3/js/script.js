//
// Alínea a)
//
 let precos = {
        corrida: 15,
        caminhada: 10,
        premium: 25
    }

    let quantidades = {
        corrida: 0,
        caminhada: 0,
        premium: 0
    }


    function alterarQuantidade(tipo, valor) {

        quantidades[tipo] += valor

        if (quantidades[tipo] < 0) {
            quantidades[tipo] = 0
        }

        document.getElementById("qtd-" + tipo).textContent = quantidades[tipo]

        atualizarTotal()
    }

    function atualizarTotal() {

        let total =
            quantidades.corrida * precos.corrida +
            quantidades.caminhada * precos.caminhada +
            quantidades.premium * precos.premium

        document.getElementById("total").textContent = total
    }

    function comprar() {


    alert("Compra realizada com sucesso!");


    for (let tipo in quantidades) {
        quantidades[tipo] = 0;
        document.getElementById("qtd-" + tipo).textContent = 0;
    }


    document.getElementById("total").textContent = 0;
    }

    //
// Alínea b)
//
function verificarComentario() {

    let texto = document.getElementById("comentario").value.toLowerCase();
    let botao = document.getElementById("submit-button");
    let mensagem = document.getElementById("mensagem");

    const palavrasObscenas = ["alcoviteiro", "biltre", "beocio", "beócio", "calhorda", "energúmeno", "energumeno", "janota", "mentecapto",
    "mequetrefe", "mocorongo", "paspalho", "palerma", "patife", "pulha", "purgante", "sacripanta"];
    let encontrou = false;

    for (let palavra of palavrasObscenas) {
        if (texto.includes(palavra)) {
            encontrou = true;
        }
    }

    if (encontrou) {
        mensagem.textContent = "Modere a sua linguagem. Precisa de pimenta na língua!";
        botao.disabled = true;
    } else {
        mensagem.textContent = "";
        botao.disabled = false;
    }
}

//
// Alínea c)
//
let timer = setInterval(mudarImagemForward, 3000);

let arrPos = 0;

const imgs = [
    {path: "../imagens/slides-1.png"},
    {path: "../imagens/slides-2.png"},
    {path: "../imagens/slides-3.png"},
    {path: "../imagens/slides-4.png"},
    {path: "../imagens/slides-5.png"}
]

function mudarImagemForward() {
    arrPos++;

    if (arrPos >= imgs.length)
        arrPos = 0

    document.getElementById("slideShowImg").src = imgs[arrPos].path;
}

function mudarImagemBackward() {
    arrPos--;
    if (arrPos < 0)
        arrPos = imgs.length - 1;

    document.getElementById("slideShowImg").src = imgs[arrPos].path;
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(mudarImagemForward, 3000);
}

/* SlideShow
Utilizei a ajuda de um LLM para criar a função arrow para implementar a funcionalidade de
dar reset ao timer de forma a quando se carrega num botão não haver a chance
da imagem trocar imediatamente a seguir.
*/
document.getElementById("back").addEventListener(
    "click", () => {
        mudarImagemBackward();
        resetTimer();
});

document.getElementById("forward").addEventListener(
    "click", () => {
        mudarImagemForward();
        resetTimer();
});
//
// Alínea d)
//

const dataEvento = new Date("2026-12-28T18:00:00");

function atualizarContador() {
    const dataAtual = new Date();
    let dif = Math.floor((dataEvento - dataAtual) / 1000);

    if (dif < 0) {
        document.getElementById("contador").textContent = "O evento já começou!";
        return;
    }

    const dias = Math.floor(dif / (60 * 60 * 24));
    const horas = Math.floor((dif % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((dif % (60 * 60)) / 60);
    const segundos = dif % 60;

    document.getElementById("contador").textContent =
        `Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

atualizarContador();

setInterval(atualizarContador, 1000);