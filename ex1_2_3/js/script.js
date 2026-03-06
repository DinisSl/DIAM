let timer = setInterval(mudarImagemForward, 3000);

let arrPos = 1;

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

/*
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

