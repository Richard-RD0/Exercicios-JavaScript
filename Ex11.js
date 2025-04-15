//Crie uma função que recebe um número e retorna formatado em real (R$),
//  com duas casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e replace()

function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',');
  }
  
  console.log(formatarPreco(14.5)); // Saída: R$ 14,50
  