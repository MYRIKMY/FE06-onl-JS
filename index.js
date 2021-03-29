/*
Создать одну лошадь.
● Для начала создадим функцию, которая будет принимать два параметра: 
имя скакуна, и время его финиширования (задаем вручную);
● Функция должна возвращать промис, который через заданное время, будет 
выводить окно alert, сообщающее что лошадь по кличке “имя скакуна” 
финишировал за “время” секунд;

Добавим ещё пару лошадей.
● Создать цикл из трех итераций, в каждой из которых будет 
запускаться функцию-промис, принимающая имя скакуна, и время его финиширования;
● Выведем окно alert, сообщающее что скакун “имя скакуна” финишировал 
за за “время” секунд;

Поменяем время на случайное.
● Создадим новую функцию, которая будет генерировать случайное время от 
0 до 5 секунд;
● Заменим параметр “время” на случайное;
*/

const horses = [
  {'horseName' : 'Первый',
  'finishTime' : 10
} , {
  'horseName' : 'Второй',
  'finishTime' : 2
} , {
  'horseName' : 'Третий',
  'finishTime' : 7}
]

function создаемЛошадь(horseName, finishTime) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(horseName + ' финишировал в ' + finishTime + 'сек');
    }, finishTime*1000);
  })
}

async function foo(horseName, finishTime) {
  let str = await создаемЛошадь(horseName, finishTime);
  alert(str);
}

function randomTime() {
  return Math.floor(Math.random() * 5);
}

for (let i = 0; i < horses.length; i++) {
  foo(horses[i].horseName, randomTime())
}
