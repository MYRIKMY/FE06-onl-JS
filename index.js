/*
Задание! Записываем в локальное хранилище данные пользователей.
● Возьмем таблицу из самостоятельного задания 8 урока;
● При загрузке страницы проверим есть ли данные в локальном хранилище;
● Если да, то выведем содержимое, если нет - выводим объект по-умолчанию, 
и записываем в localstorage;
★ Добавим функционал добавления пользователя, новый пользователь так же 
должен быть записан в локальноехранилище.
*/

const addUserElement = document.querySelector('.add-user');
const modalElement = document.querySelector('.modal');
const closeElement = document.querySelectorAll('.close');
const okElement = document.querySelector('.ok');
const nameElement = document.querySelector('.first-name');
const surnsmeElement = document.querySelector('.last-name');
const ageElement = document.querySelector('.age');
const tableElement = document.querySelector('.table');

const info = [
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
  let count = localStorage.length;

  let o = {};
  o['firstName']=nameElement.value;
  o['lastName']=surnsmeElement.value;
  o['age']=ageElement.value;

  localStorage.setItem(count, JSON.stringify(o));

  nameElement.value = '';
  surnsmeElement.value = '';
  ageElement.value = '';
  
  buildingATable();
})

for (let i = 0; i < info.length; i++) {
  localStorage.setItem(i, JSON.stringify(info[i]));
}

function buildingATable() {
  const forClear = document.querySelectorAll('tr');
  for (let i = 1; i < forClear.length; i++) {
    forClear[i].remove();
  }

  for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(localStorage.getItem(i));
    console.log(item);
    const trElem = document.createElement("tr");

    const dataFirstName = item.firstName;
    const dataLastName = item.lastName;
    const dataAge = item.age;

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
};

buildingATable();
