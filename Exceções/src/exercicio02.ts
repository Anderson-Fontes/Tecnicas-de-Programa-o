function aleatorio(): number {
  const nro = Math.floor(Math.random() * 10);
  if (nro % 2 === 0) {
      return nro;
  }
  throw new Error("Número ímpar");
}

function arrayAleatorio(quantidade: number): number[] {
  const array: number[] = [];
  while (array.length < quantidade) {
      try {
          array.push(aleatorio());
      } catch (e) {
          // ignora e tenta de novo
      }
  }
  return array;
}

const vet = arrayAleatorio(8);
console.log("Array:", vet);
console.log("Fim do programa");
