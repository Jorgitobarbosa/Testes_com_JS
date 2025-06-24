

let semaforo = "verde"; // verde, amarelo ou vermelho
let botaoPressionado = false;

if (semaforo == "vermelho" && botaoPressionado) {
    console.log("Pode atravessar");
} else if (semaforo == "amarelo") {
    console.log("Aguarde, o sinal vai mudar");
} else if (semaforo == "vermelho" && !botaoPressionado) {
    console.log("Espere o botão ser pressionado");
} else {
    console.log("Não pode atravessar");
}
