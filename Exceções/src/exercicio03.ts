class AleatorioError extends Error {
  constructor(message: string, public nro: number) {
      super(message);
  }
}

function aleatorio3(): number {
  const nro = Math.floor(Math.random() * 10);
  if (nro % 2 === 0) {
      return nro;
  }
  throw new AleatorioError("Número ímpar", nro);
}

function arrayAleatorio3(quantidade: number): number[] {
  const array: number[] = [];
  while (array.length < quantidade) {
      try {
          array.push(aleatorio3());
      } catch (e: any) {
          array.push(e.nro * 10);
      }
  }
  return array;
}

const vet3 = arrayAleatorio3(8);
console.log("Array:", vet3);
console.log("Fim do programa");
