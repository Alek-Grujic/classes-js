
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year
//     }
//     info() {
//         console.log(`This is a ${this.brand} ${this.model} from ${this.year}`)
//     }
// }

// const toyota = new Car('Toyota', 'Corolla', 2010.);
// const bmw = new Car('BMW', 'X5', 2022.);

// console.log(toyota);
// console.log(bmw);

// ------------------------------------------------------

// const pinKey = Symbol('pin');

// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance
//         this[pinKey] = 1234;
//     }
// }

// const x = new BankAccount('Mark', 10.343);

// function checkPin(account, inputPin) {
//     if (account[pinKey] === inputPin) console.log('Access granted.');
//     else console.log('Wrong PIN.');
// }

// ------------------------------------------------------

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('move', this);
        });
    }
    draw() {
        _move.get(this)();

        console.log('draw');
    }
}

const c = new Circle(10);

console.log(c);

c.draw();