//Crie uma função que recebe um número como string 
// (por exemplo: '00110001011') e retorna no formato de CPF (001.100.010-11) usando slice e concatenação.

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é número
    return cpf.slice(0, 3) + '.' +
           cpf.slice(3, 6) + '.' +
           cpf.slice(6, 9) + '-' +
           cpf.slice(9, 11);
  }
  
  console.log(formatarCPF('00110001011')); // Saída: 001.100.010-11