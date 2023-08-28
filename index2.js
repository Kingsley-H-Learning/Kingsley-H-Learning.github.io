function printGreeting(name) {
  // simple undecorated function
  console.log('Hello, ' + name);
}

function sum(a, b) {
  // simple undecorated function
  console.log(a + b);
}
printGreeting('Undecorated');
function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function () {
    // and returns that function with extra bits - timing/logging
    console.time('Function timer'); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction.apply(null, arguments); // execute the original function and store result
    console.timeEnd('Function timer'); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
// const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
// decoratedPrintGreeting('Decorated'); // we can still call the decorated version in the same way
// const decoratedSum = loggingTimingDecorator(sum);
// decoratedSum(1, 4);

this.getMultiplier = function () {
  return 9; // large random number
};

let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
  },
  slow(x) {
    let random = 0,
      goal = x * this.getMultiplier(); // needs context to work
    console.log('goal', goal);
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    console.log('random', random);
    return random; //return large number
  },
};

let worker1 = {
  getMultiplier() {
    console.log('getMultiplier');
    return 23; // large random number
  },
};

let worker2 = {
  getMultiplier() {
    console.log('getMultiplier');
    return -10; // large random number
  },
};
// worker.slow(5); // works, context comes from before the dot, ie. worker
// worker.fast = loggingTimingDecorator(worker.slow.call(worker1, 7)); // without call/apply, context is lost
// worker.fast(3).bind(worker); // TypeError: Cannot read properties of undefined (reading 'getMultiplier')
worker.fast = loggingTimingDecorator(worker.slow); // without call/apply, context is lost
worker.fast(3);
