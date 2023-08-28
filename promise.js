function myConsoleLog(value) {
  console.log(value);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // some code (try to change x to 5)

  if (x > 0) {
    myResolve('OK');
  } else {
    myReject('Error');
  }
});

myPromise.then(
  function (value) {
    myConsoleLog(value);
  },
  function (error) {
    myConsoleLog(error);
  }
);
