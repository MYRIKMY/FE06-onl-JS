let addUserElement = document.querySelector('.add-user');
let modalElement = document.querySelector('.modal');
let closeElement = document.querySelectorAll('.close');
let okElement = document.querySelector('.ok');
let nameElement = document.querySelector('.first-name');
let surnsmeElement = document.querySelector('.last-name');
let ageElement = document.querySelector('.age');

addUserElement.addEventListener ('click', function () {
  modalElement.style.display='block';
})

for (let i of closeElement) {
  i.addEventListener ('click', function () {
  nameElement.value = '';
  surnsmeElement.value = '';
  ageElement.value = '';

  modalElement.style.display='none';
})
}



okElement.addEventListener ('click', function () {
  alert('New user has been added: ' + nameElement.value + ' ' + surnsmeElement.value + ', ' + ageElement.value);

  nameElement.value = '';
  surnsmeElement.value = '';
  ageElement.value = '';
})

