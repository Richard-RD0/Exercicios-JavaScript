//Peça um texto e retorne quantos dígitos 
//numéricos ele contém usando split() e filter() com isNaN().

function contarDigitos(texto) {
    return texto.split('').filter(caractere => !isNaN(caractere) && caractere !== ' ').length;
  }
  
  console.log(contarDigitos('A senha é 1345 e tem 3 caracteres!')); // Saída: 5
  