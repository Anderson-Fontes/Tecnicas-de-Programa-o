class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distancia(ponto: Ponto): number {
        const dx = ponto.x - this.x;  
        const dy = ponto.y - this.y;  
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy , 2));
    }
}

const valor = new Ponto(3, 5);
const valor2 = new Ponto(1, 2);

console.log("Distância:", valor.distancia(valor2));

