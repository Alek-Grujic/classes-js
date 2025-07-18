
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
    info() {
        console.log(`This is a ${this.brand} ${this.model} from ${this.year}`)
    }
}

const toyota = new Car('Toyota', 'Corolla', 2010.);
const bmw = new Car('BMW', 'X5', 2022.);

console.log(toyota);
console.log(bmw);