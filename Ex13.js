//Crie uma função que recebe um array de palavras e retorna 
// apenas as que têm mais de 5 letras, usando filter().

function filtrarPalavras(palavras) {
    return palavras.filter(palavra => palavra.length > 3);
  }
  
  console.log(filtrarPalavras(['cachorro', 'gato', 'elefante', 'pato'])); // Saída: ['cachorro', 'elefante']
  