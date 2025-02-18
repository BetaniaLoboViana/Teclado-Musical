const notas = {
    "A": "C.wav",
    "S": "D.wav",
    "D": "E.wav",
    "F": "F.wav",
    "G": "G.wav",
    "H": "A.wav",
    "J": "B.wav",
    "K": "C_high.wav"
};

function tocarNota(tecla) {
    if (notas[tecla]) {
        let audio = new Audio(notas[tecla]); 
        audio.play();

        // Adiciona o efeito visual de tecla pressionada
        let botao = document.querySelector(`.key[data-key="${tecla}"]`);
        if (botao) {
            botao.classList.add("pressed");
            setTimeout(() => botao.classList.remove("pressed"), 200);
        }
    }
}

// Detectando quando uma tecla do teclado é pressionada
document.addEventListener("keydown", (event) => {
    let tecla = event.key.toUpperCase(); // A tecla é capturada
    tocarNota(tecla);
});

// Adicionando evento de clique nas teclas do piano
document.querySelectorAll(".key").forEach(botao => {
    botao.addEventListener("click", function() {
        let tecla = this.getAttribute("data-key");
        tocarNota(tecla);
    });
});
