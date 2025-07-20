
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

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }
//     draw() {
//         _move.get(this)();

//         console.log('draw');
//     }
// }

// const c = new Circle(10);

// console.log(c);

// c.draw();

// ------------------------------------------------------

// const _secretCode = new WeakMap();

// class Device {
//     constructor(name, secretCode) {
//         this.name = name;
//         _secretCode.set(this, secretCode)
//     }
//     revealCode() {
//         return _secretCode.get(this);
//     }
// }

// const d = new Device('TV', 9988);

// console.log(d);

// console.log(d.secretCode);

// console.log(d.revealCode());

// ------------------------------------------------------

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {

//     bark() {
//         console.log("Dog barks");
//     }
// }

// const d = new Dog('Bobby');
// d.speak(); // Nasleđeno iz Animal 
// d.bark();  // Definisano u Dog 
// console.log(d);

// ------------------------------------------------------

class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);