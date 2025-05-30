const salarioAtual: number = 3500; 
const percentualReajuste: number = 10; 

const valorReajuste = (salarioAtual * percentualReajuste) / 100;
const novoSalario = salarioAtual + valorReajuste;

console.log("===== REAJUSTE SALARIAL =====");
console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
console.log(`Percentual de reajuste: ${percentualReajuste}%`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
console.log("");
