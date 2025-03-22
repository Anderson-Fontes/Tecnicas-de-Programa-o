class Matematica {
    nro: number;

    constructor(nro: number) {
        this.nro = nro;
    }

    calcular(): void {}
}

class Somar extends Matematica {
    constructor(nro: number) {
        super(nro);
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} + ${i} = ${this.nro + i}`);
        }
    }
}

class Multiplicar extends Matematica {
    constructor(nro: number) {
        super(nro);
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} * ${i} = ${this.nro * i}`);
        }
    }
}

const soma = new Somar(5);
soma.calcular();

const mult = new Multiplicar(5);
mult.calcular();