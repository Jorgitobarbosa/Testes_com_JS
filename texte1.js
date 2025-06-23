


var diaDeSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]


function agenda(diaDeSemana){
    
    console.log ("Verificando a sua agenda...")
    let hoje = prompt("Que dia é hoje? ").toLowerCase()
    let temCompromisso = true
    
    if (diaDeSemana.includes(hoje)){
        if (temCompromisso){
            console.log (`Hoje é ${hoje} e voce tem compromisso| Acordar cedo!`)
        } else {
        console.log ("É dia de Semana, mas sem compromisso| Dormir até mais tarde!")
        }
    } 
       else if (["sabado", "domingo"].includes(hoje)){
            console.log ("É final de Semana!") 
       }
}
agenda(diaDeSemana)



function acesso_ao_predio (){
    
    console.log ("VAMOS VERIFICAR SE TENS ACESSO AO PRÉDIO")
    
    let temcartao = false
    let valido = true
    let temAutorizacao = false
    if (temcartao){
        if (valido){
            console.log ("Acesso liberado! ")
        } else {
            console.log ("Cartao iválido! Precisa renovar a válidade" )
        }
    } else if (!temcartao && temAutorizacao){
        console.log ("Acesso liberado com autorizacao")
    } else {
        console.log ("Acesso negado")
    }
} 
acesso_ao_predio ()

function possibilidade (diaDeSemana){
    
    alert ('VERIFICANDO SE TENS A CONDIÇAO DE ENTRAR NA DISCOTECA...')
    confirm ('És maoir de idade? ')
    let idade = Number(prompt('Quantos anos tens: '))
    let temDinheiro = prompt('Tens dinheiro de pagar a discoteca ').toLowerCase()
    let diaDeHoje = prompt('Que dia é hoje: ')
    
    if (!diaDeSemana.includes(diaDeHoje)){
        if (idade >= 18){
            if (temDinheiro == "sim"){
                console.log ("Todo certo! Se divirta.")
            } else if (idade < 18){
                    console.log ("Menor de idade! Este ambiente é para maoires de 18")
            } else {
                console.log ("A discoteca só funciona nos finais da semana")
            }
        }
    }

} 
possibilidade(diaDeSemana)

