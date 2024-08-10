
// Inicio do laço de repetição//

do {

const numero =require ("prompt-sync")()
let vitorias = parseInt (numero ("Digite o numero de vitórias do Heroi : "))
let derrotas = parseInt (numero ("Digite o numero de derrotas do Heroi :  "))

function rankHeroi (vitorias, derrotas) {

        // Calculo do saldo de vitorias//

        let saldoRank = vitorias - derrotas;
        let nivel;

       // inicio da verificação de Nivel

        if (saldoRank < 10 ){
         nivel = "Ferro";
        } else if (saldoRank >= 11 && saldoRank <= 20){
        nivel = "Bronze";
        }else if (saldoRank >= 21 && saldoRank <= 50 ){
        nivel = "Prata";
        }else if (saldoRank >= 51 && saldoRank <= 80 ){
        nivel = "Ouro";
        }else if (saldoRank >= 81 && saldoRank <= 90 ){
        nivel = "Diamante";
        }else if (saldoRank >= 91 && saldoRank <= 100){
        nivel = "Lendário";
        }else if (saldoRank >= 101){
        nivel = "Imortal";
        }
       // retorno da função com o resultado

      return ("O Heroi tem de saldo de  "  +  saldoRank  +   " esta no nivel de  "  + nivel) 
}


// Sainda do resultado chamando a função.
let resultado = rankHeroi (vitorias,derrotas);
console.log (resultado);
 
// Final do laço apresentado a opção para a condição de repetição ou não da verificação.

let op = parseInt (numero ("Digite 1 para continuar a verificação ou 2 para encerra a verificação:  "))
} while (op !== 2) 



                 




