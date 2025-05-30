const totalEleitores: number = 1000;
const votosBrancos: number = 150;
const votosNulos: number = 50;
const votosValidos: number = 800;

if (votosBrancos + votosNulos + votosValidos !== totalEleitores) {
  console.error("Erro: a soma dos votos não corresponde ao total de eleitores.");
} else {
  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;
  const percentualValidos = (votosValidos / totalEleitores) * 100;

  console.log(`Total de eleitores: ${totalEleitores}`);
  console.log(`Votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Votos válidos: ${percentualValidos.toFixed(2)}%`);
}
