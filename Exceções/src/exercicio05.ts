class Pilha5<T> {
  private items: T[] = [];

  push(item: T): void {
    if (this.items.length == 5) {
      throw new Error("Pilha cheia");
    }
    this.items.push(item);
  }

  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw new Error("Pilha vazia");
    }
    return item;
  }
}

const nomes5 = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha5 = new Pilha5<string>();

for (let i = 0; i < nomes5.length; i++) {
  try {
    pilha5.push(nomes5[i]);
  } catch (e: any) {
    console.log("Erro ao empilhar:", e.message);
  }
}

try {
  while (true) {
    const item = pilha5.pop();
    console.log(item);
  }
} catch (e: any) {
  console.log("Pilha vazia");
}

console.log("Fim do programa");
