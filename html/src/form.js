function onSubmit(e) {
  console.log('event', e);
  e.preventDefault();
  const form = document.getElementsByTagName('form');
  console.log('form', form);
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  console.log({
    firstName,
    lastName,
  });
}
