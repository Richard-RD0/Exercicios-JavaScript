//Crie uma função que remove espaços repetidos de uma
//  frase (ex: "Olá mundo bonito" → "Olá mundo bonito"), usando split(), filter() e join().

function limparEspacos(frase) {
    return frase.split(' ').filter(Boolean).join(' ');
  }
  
  console.log(limparEspacos('Olá   mundo   bonito')); // Saída: Olá mundo bonito
  