//Reorganizar Data
//Receba uma data no formato "2025-04-15" e transforme para 
// "15/04/2025" usando split() e reverse().

function reorganizarData(data) {
    return data.split('-').reverse().join('/');
  }
  
  console.log(reorganizarData('2025-04-15')); // Saída: 15/04/2025
  