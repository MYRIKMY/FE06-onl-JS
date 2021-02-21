const data = [
  {
    product:'молочко', price:40, count:2
  },
  {
    product:'картошечка', price:14, count:10
  },
  {
    product:'минералочка', price:29, count:2
  },
  {
    product:'хлебушек', price:19, count:1
  },
  {
    product:'конфетки', price:11, count:15
  }
];

var koshel = prompt('сколько денег?');
var sumOnOneDay = 0;
data.forEach(function(item) {
  sumOnOneDay = item.price*item.count + sumOnOneDay
});
console.log('в один день тратится -> ' + sumOnOneDay);
var daysSurvive = Math.floor(koshel/sumOnOneDay);
console.log('прожитых дней -> ' + daysSurvive);
var ostatok = koshel - daysSurvive*sumOnOneDay;
console.log('остаток -> ' + ostatok);

alert('Семья Петровичей на указанную сумму сможет прожить ' + daysSurvive + ' дней');
alert('Остаток: ' + ostatok + ' рублей');

