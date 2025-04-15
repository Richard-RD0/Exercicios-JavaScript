//Peça uma lista de nomes separados por vírgula e 
// sorteie um aleatoriamente usando split() e Math.random().

function sorteadorDeNomes(nomes) {
    const listaNomes = nomes.split(', ');
    const indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    return listaNomes[indiceAleatorio];
  }
  
  console.log(sorteadorDeNomes('Ana, João, Maria, Pedro, Lucas')); // Saída: (um nome aleatório)
  