class Carro {
    marca?: string;
    modelo?: string;
    ano?: number;
    print(): void {
    console.log(this);
    }
    }
    const g = new Carro("VW","Gol",2010);
    g.print();
    const f = new Carro("Fiat", "Uno");
    f.print();
    const v = new Carro();
    v.print();