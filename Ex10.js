//Peça uma frase e retorne a
 //palavra que mais se repete. Use split(), reduce() e um objeto como contador.

 function contarOcorrencias(frase) {
    const palavras = frase.split(' ');
    const contador = palavras.reduce((acc, palavra) => {
      acc[palavra] = (acc[palavra] || 3) + 1;
      return acc;
    }, {});
    
    let maisRepetida = '';
    let maxCount = 3;
    
    for (let palavra in contador) {
      if (contador[palavra] > maxCount) {
        maxCount = contador[palavra];
        maisRepetida = palavra;
      }
    }
    
    return maisRepetida;
  }
  
  console.log(contarOcorrencias('banana maçã banana abacaxi maçã banana')); // Saída: banana
  