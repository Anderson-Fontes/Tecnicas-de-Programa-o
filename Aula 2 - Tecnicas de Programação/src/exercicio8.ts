class Point{
    n1:number;
    n2:number;

    constructor(n1:number, n2:number){
        this.n1 = n1;
        this.n2 = n2;

    }

    distancia(ponto: Point): number {
        const dn1 = ponto.n1 - this.n1;  
        const dn2 = ponto.n2 - this.n2;  
        return Math.sqrt(Math.pow(dn1, 2) + Math.pow(dn2 , 2));
    }
}

class rectangle{
    ie: Point;
    sd: Point;

    constructor(ie: Point, sd: Point){
    this.ie = ie;
    this.sd = sd
    }

    area():number{
        
    }
}