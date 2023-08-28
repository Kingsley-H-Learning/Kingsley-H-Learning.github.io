// const promise = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(1000), 1000)
// );
// promise.then((result) => {
//   console.log(result + 1);
// });
const promises = [];
for (let i = 5; i > 0; i--) {
  const miliSec = i * 1000;
  //   console.log(miliSec);
  promises.push(
    new Promise((resolve) => setTimeout(() => resolve(miliSec), miliSec))
  );
}

promises.push(
  new Promise(() => {
    throw new Error();
  })
);

// promises.map((p) => Promise.resolve(p).then((result) => console.log(result)));

Promise.all(promises).then(
  (results) => console.log('result', results),
  (error) => console.log('error', error)
);

Promise.allSettled(promises).then(
  (results) => console.log('allSettled result', results),
  (error) => console.log(error)
);
