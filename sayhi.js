let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
// console.log('Object.getPrototypeOf(animal)', Object.getPrototypeOf(animal));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal))); //prints all inherited properties
let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); /// OLD WAY - explicitly inherit from animal prototype
// console.log(rabbit);
// console.log(rabbit.legs); // true, inherits prototype properties
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)));

let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    value: true,
  },
  run: {
    value: 8,
    enumerable: true,
    // writable: true,
    configurable: false,
  },
});
// rabbit2.run = 10;
// console.log('rabbit2', rabbit2.run);
// delete rabbit2.run;
// for (let prop in rabbit1) console.log(`rabbit1 ${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
// for (let prop in rabbit2) console.log(`rabbit2 ${prop} is ${rabbit2[prop]}`);

function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
  this.name = name;
}
// sets the prototype to inherit from (same animal object as previous)

let whiteRabbit = new Rabbit('White Rabbit');
Rabbit.prototype = animal;
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); //
let blackRabbit = new Rabbit('black Rabbit');
console.log(blackRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in blackRabbit) console.log(`${prop} is ${blackRabbit[prop]}`); //
