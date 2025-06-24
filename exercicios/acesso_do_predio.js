

let temCracha = true
let temAutorizacoa = false
let validade = false


if (temCracha && validade) {
    console.log("Acesso permitido")
} else if (!validade && temAutorizacoa) {
    console.log("Acesso liberado com autorização")
} else if (temCracha && !validade) {
    console.log("Acesso negado por invalidade de crachá")
} else {
    console.log("Acesso negado")
}
