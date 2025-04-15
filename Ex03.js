//Peça uma frase e uma letra, e retorne quantas palavras 
// começam com essa letra (ex: 'a'). Use split(), startsWith() e filter().

function contarPalavrasComLetra(frase, letra) {
    const palavras = frase.split(' ');
    return palavras.filter(palavra => palavra.toLowerCase().startsWith(letra.toLowerCase())).length;
  }
  
  console.log(contarPalavrasComLetra('Amazônia é a maior floresta do mundo', 'a')); // Saída: 3
  