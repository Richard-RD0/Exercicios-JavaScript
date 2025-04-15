//Peça uma frase e crie uma função que retorna a maior palavra
//  da frase usando split() e reduce().

function maiorPalavra(frase) {
    const palavras = frase.split(' ');
    return palavras.reduce((maior, atual) => atual.length > maior.length ? atual : maior, '');
  }
  
  console.log(maiorPalavra('JavaScript é muito divertido e funcional')); // Saída: JavaScript