class Carro{
    marca: string = "";
    modelo: string = "";

    setMarca(marca: string) : void{
        this.marca = marca;
    }

    setModelo(modelo: string): void{
        this.modelo = modelo;
    }

    print(): void{
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const car = new Carro();
car.setMarca("VW"); car.setModelo("Gol");

const car2 = new Carro();
car2.setMarca("Fiat"); car2.setModelo("Uno");

car.print();
car2.print();