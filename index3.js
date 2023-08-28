class Animal {
  type = 'animal';
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
class Rabbit extends Animal {
  type = 'rabbit';
  hide() {
    // custom function, also inherits from Animal
    super.stop();
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
// bunny.run(9); // bunny runs with speed 9 kph.
bunny.stop(); // bunny hides!

// console.log('Object.getPrototypeOf(animal)', Object.getPrototypeOf(bunny));
// console.log(Object.getOwnPropertyNames(bunny)); //prints all inherited properties

// new Rabbit('bunny').describe(); // bunny is a rabbit
// new Animal('fuzzy wuzzy').describe(); // fuzzy wuzzy is a animal

class Person {
  static latin = 'persona';
  static numofCalls = 0; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    this.numofCalls++;
    return new Person('Unnamed Person');
  }
}
let jonas = new Person('Jonas');
let a = new Person('Jonas');
// const aString = jonas.createAnonymous();

class Laptop {
  _hardDiskType = 'HDD'; // protected property, should only be used by inheriting classes
  #numCPUFans = 1; // private property, can only be used internally by class methods

  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return true;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
  getnumberOffuns() {
    return this.#numCPUFans;
  }
}
const obj = {
  _firstname: '',
  last: '',
};

class ObjectA {
  #firstname;
  constructor(name) {
    this.#firstname = name;
  }
}

const objB = new ObjectA('name');

class GamingLaptop extends Laptop {
  constructor(brand) {
    super(brand); // public property, externally available to instances
    this._hardDiskType = 'SSD'; // protected props should be accessed by children, not instances
    // this.#numCPUFans = 2; // error: private property is not accessible
    this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
  }
  isGaming() {
    return true;
  } // public method
}
const alienware = new GamingLaptop('Alienware');
//console.log(alienware.#numCPUFans) // error: private property is not accessible
// console.log(alienware._hardDiskType); // no error: but protected property SHOULD NOT be accessed
// console.log(alienware.getHDiskType()); // b
console.log(alienware.getnumberOffuns());
