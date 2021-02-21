var min=1;
var max=11;
const array = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandom(min, max) {
  let number;
  for (let i=0; i<7; i++) {
    number = getRandom(min, max);
    if (array.includes(number)) {
      i--;
    } else {
      array.push(number);
    }
  }
  return array;
}

console.log(generateRandom(min, max));

array.sort(function(a, b) {
  return a - b;
});
console.log(array);
