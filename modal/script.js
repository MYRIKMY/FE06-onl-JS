let addUserElement = document.querySelector('.add-user');
let modalElement = document.querySelector('.modal');
let closeElement = document.querySelectorAll('.close');
let okElement = document.querySelector('.ok');
let nameElement = document.querySelector('.first-name');
let surnsmeElement = document.querySelector('.last-name');
let ageElement = document.querySelector('.age');
let tableElement = document.querySelector('.table');

let data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
  }, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
  }, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
  }
];

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
  let trElem = document.createElement("tr");
  let dataFirstName = nameElement.value;
  let dataLastName = surnsmeElement.value;
  let dataAge = ageElement.value;

  let dataFirstNameCell = document.createElement("td");
  let dataLastNameCell = document.createElement("td");
  let dataAgeCell = document.createElement("td");

  dataFirstNameCell.appendChild(document.createTextNode(dataFirstName));
  dataLastNameCell.appendChild(document.createTextNode(dataLastName));
  dataAgeCell.appendChild(document.createTextNode(dataAge));

  trElem.appendChild(dataFirstNameCell);
  trElem.appendChild(dataLastNameCell);
  trElem.appendChild(dataAgeCell);

  tableElement.appendChild(trElem);

  let o = {};
  o['firstName']=nameElement.value;
  o['lastName']=surnsmeElement.value;
  o['age']=ageElement.value;

  data.push(o);

  nameElement.value = '';
  surnsmeElement.value = '';
  ageElement.value = '';
})

for (var i = 0; i < data.length; i++) {
  let trElem = document.createElement("tr");
  let dataFirstName = data[i].firstName;
  let dataLastName = data[i].lastName;
  let dataAge = data[i].age;

  let dataFirstNameCell = document.createElement("td");
  let dataLastNameCell = document.createElement("td");
  let dataAgeCell = document.createElement("td");

  dataFirstNameCell.appendChild(document.createTextNode(dataFirstName));
  dataLastNameCell.appendChild(document.createTextNode(dataLastName));
  dataAgeCell.appendChild(document.createTextNode(dataAge));

  trElem.appendChild(dataFirstNameCell);
  trElem.appendChild(dataLastNameCell);
  trElem.appendChild(dataAgeCell);

  tableElement.appendChild(trElem);
}
