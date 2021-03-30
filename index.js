const token = `https://605d90809386d200171bac86.mockapi.io/api/project-1/users/`;

const getAllUsersBtnElement = document.querySelector(`.get-all-users`);
const getUserBtnElement = document.querySelector(`.get-user`);
const updateUserBtnElement = document.querySelector(`.update-user`);
const createUserBtnElement = document.querySelector(`.create-user`);
const deleteUserBtnElement = document.querySelector(`.delete-user`);

const userIdElement = document.querySelector(`.user-id`);

const userPhoneElement = document.querySelector(`.phone-value`);
const userNameElement = document.querySelector(`.name-value`);
const userEmailElement = document.querySelector(`.email-value`);
const userAvatarElement = document.querySelector(`.avatar-value`);

const formElement = document.querySelector('.form');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', cleaningWorkspace);

getAllUsersBtnElement.addEventListener('click', function() {
  fetch(`${token}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createTable(data, 'allUsers');
      return data;
    })
    .then(formElement.reset())
})

getUserBtnElement.addEventListener('click', function() {
  const userId = userIdElement.value;
  fetch(`${token}${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createTable(data, 'only');
      return data;
    })
    .then(userData => {
      userPhoneElement.value = userData.phone;
      userNameElement.value = userData.name;
      userEmailElement.value = userData.email;
      userAvatarElement.value = userData.avatar;
    });
})

deleteUserBtnElement.addEventListener('click', function() {
  const userId = userIdElement.value;
  fetch(`${token}${userId}`, {
    method: 'DELETE',
  });
  cleaningWorkspace();
})

updateUserBtnElement.addEventListener('click', function() {
  const userId = userIdElement.value;
  const userData = getUserFromForm();
  console.log(userData);

  fetch(`${token}${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  cleaningWorkspace();
})

createUserBtnElement.addEventListener('click', function() {
  const userData = getUserFromForm();
  fetch(`${token}`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  cleaningWorkspace();
})

function cleaningWorkspace() {
  formElement.reset();
  clearTable();
}
function createTableHead (arr, parent) {
  const trElem = document.createElement('tr')
  for (let i of arr) {
    let dataItem = i;
    let dataItemCell = document.createElement('th');
    dataItemCell.appendChild(document.createTextNode(dataItem.toUpperCase()));
    trElem.appendChild(dataItemCell);
  }

  parent.appendChild(trElem);
}
function tableBodyLogic(info) {
  let trElem = document.createElement('tr');
  for (let key in info) {
    if (key != 'avatar') {
      let dataItem = info[key];
      let dataItemCell = document.createElement('td');
      dataItemCell.appendChild(document.createTextNode(dataItem));
      trElem.appendChild(dataItemCell);
    } else {
      let dataItem = info['avatar'];
      let dataItemCell = document.createElement('td');
      let image = document.createElement('img');
      image.src = dataItem;
      image.alt = 'photo';
      dataItemCell.appendChild(image);
      trElem.appendChild(dataItemCell);
    }
  }
  return trElem;
}
function createTableBody(info, parent, howManyUsers) {
  if (howManyUsers == 'only') {
    parent.appendChild(tableBodyLogic(info))
  } else {
    for (let obj of info) {
      parent.appendChild(tableBodyLogic(obj))
  }
}}
function clearTable() {
  const clear = document.querySelectorAll('tr');
  for (let i = 0; i < clear.length; i++) {
    clear[i].remove();
  }
}
function createTable(info, howManyUsers) {
  clearTable();

  const tableCreated = document.createElement('table');

  let headers;
  if (howManyUsers == 'only') {
    headers = Object.keys(info);
    createTableHead(headers, tableCreated);
    createTableBody(info, tableCreated, 'only');
  } else {
    headers = Object.keys(info[0]);
    createTableHead(headers, tableCreated);
    createTableBody(info, tableCreated, 'allUsers');
  }

  const plaseTableHere = document.querySelector('body');
  plaseTableHere.appendChild(tableCreated);
}

function getUserFromForm() {
  const userData = {};
  const formData = new FormData(formElement)
  
  for (let [key, val] of formData.entries()) {
    userData[key] = val; 
  }
  
  return userData;
}