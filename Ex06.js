//Peça uma frase e retorne cada palavra com a primeira letra maiúscula. 
//Use split(), map(), toUpperCase() e slice().

function primeiraLetraMaiuscula(frase) {
    return frase.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
  }
  
  console.log(primeiraLetraMaiuscula('olá mundo bonito')); // Saída: Olá Mundo Bonito
  