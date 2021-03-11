let tabButtonElement1 = document.querySelector('.tab-btn-1');
let tabButtonElement2 = document.querySelector('.tab-btn-2');
let tabButtonElement3 = document.querySelector('.tab-btn-3');

let tabContentElement1 = document.querySelector('.tab-cont-1');
let tabContentElement2 = document.querySelector('.tab-cont-2');
let tabContentElement3 = document.querySelector('.tab-cont-3');

let closeTabContElem = document.querySelectorAll('.close-btn');

let closeTabElem = document.querySelectorAll('.close-tab');

tabButtonElement1.addEventListener ('click', function () {
  let activeTabElement = document.querySelector('.active-tab');
  if (activeTabElement) {
    activeTabElement.classList.remove('active-tab');
  }

  tabContentElement1.classList.add('active-tab');
})

tabButtonElement2.addEventListener ('click', function () {
  let activeTabElement = document.querySelector('.active-tab');
  if (activeTabElement) {
    activeTabElement.classList.remove('active-tab');
  }

  tabContentElement2.classList.add('active-tab');
})

tabButtonElement3.addEventListener ('click', function () {
  let activeTabElement = document.querySelector('.active-tab');
  if (activeTabElement) {
    activeTabElement.classList.remove('active-tab');
  }

  tabContentElement3.classList.add('active-tab');
})

for (let i of closeTabContElem) {
  i.addEventListener ('click', function() {
    let activeTabElement = document.querySelector('.active-tab');

    activeTabElement.classList.remove('active-tab');
  })
}

for (let i of closeTabElem) {
  i.addEventListener ('click', function() {
    i.parentElement.classList.add('hidden-tab');
  })
}
