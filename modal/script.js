const addUserElement = document.querySelector('.add-user');
const modalElement = document.querySelector('.modal');
const closeElement = document.querySelectorAll('.close');
const okElement = document.querySelector('.ok');
const nameElement = document.querySelector('.first-name');
const surnsmeElement = document.querySelector('.last-name');
const ageElement = document.querySelector('.age');
const tableElement = document.querySelector('.table');

const data = [
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

    modalElement.classList.add('hidden');
  })
}

okElement.addEventListener ('click', function () {
  const trElem = document.createElement("tr");
  const dataFirstName = nameElement.value;
  const dataLastName = surnsmeElement.value;
  const dataAge = ageElement.value;

  const dataFirstNameCell = document.createElement("td");
  const dataLastNameCell = document.createElement("td");
  const dataAgeCell = document.createElement("td");

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
  const trElem = document.createElement("tr");
  const dataFirstName = data[i].firstName;
  const dataLastName = data[i].lastName;
  const dataAge = data[i].age;

  const dataFirstNameCell = document.createElement("td");
  const dataLastNameCell = document.createElement("td");
  const dataAgeCell = document.createElement("td");

  dataFirstNameCell.appendChild(document.createTextNode(dataFirstName));
  dataLastNameCell.appendChild(document.createTextNode(dataLastName));
  dataAgeCell.appendChild(document.createTextNode(dataAge));

  trElem.appendChild(dataFirstNameCell);
  trElem.appendChild(dataLastNameCell);
  trElem.appendChild(dataAgeCell);

  tableElement.appendChild(trElem);
}
