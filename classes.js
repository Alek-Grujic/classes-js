
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

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 1);

// ------------------------------------------------------

// class Shape {
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     move() {
//         console.log('circle move');
//     }
// }

// const c = new Circle();

// ------------------------------------------------------

// FINAL EXERCISES IN ES6 CLASSES SECTION

// -----

const _items = new WeakMap();

class Queue {
    constructor() {
        _items.set(this, []);
    }
    enqueue(item) {
        const items = _items.get(this);
        items.push(item);
    }
    dequeue() {
        if (_items.get(this).length === 0) throw new Error('Queue is empty!');
        return `This element is out: ${_items.get(this).splice(0, 1)[0]}`;
    }
    peek() {
        if (_items.get(this).length === 0) throw new Error('Queue is empty!');
        return `This is first element: ${_items.get(this)[0]}`;
    }
    get count() {
        return _items.get(this).length;
    }
}

const q = new Queue();

q.enqueue('a');
q.enqueue('b');

try {
    console.log(q.dequeue());
} catch (e) {
    console.error(e.message);
}
try {
    console.log(q.peek());
} catch (e) {
    console.error(e.message);
}

console.log(q.count);


console.log(q);
