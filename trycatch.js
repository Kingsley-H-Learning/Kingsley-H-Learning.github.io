// fetch('https://reqres.in/api/users') // request data from this server
//   // when it completes, access the JSON from the HTTP response sent by resolved promise
//   .then((response) => {
//     console.log('response', response);
//     return response.json();
//   }) // .json() also returns a promise
//   .then((json) => console.log(json)) // log the returned JSON to the browser console
//   .catch((error) => console.error(error)); // if there was an error, log that too

// console.log('promise', fetch('https://reqres.in/api/users'));

async function init() {
  const response = await fetch('https://reqres.in/api/users');
  const json = await response.json();
  console.log(json);
}

init();
