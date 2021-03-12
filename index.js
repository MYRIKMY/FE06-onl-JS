let tabButtonElement1 = document.querySelector('.tab-btn-1');
let tabButtonElement1 = document.querySelector('.tab-btn-1');
let tabButtonElement2 = document.querySelector('.tab-btn-2');
let tabButtonElement3 = document.querySelector('.tab-btn-3');

let tabContentElement1 = document.querySelector('.tab-cont-1');
let tabContentElement2 = document.querySelector('.tab-cont-2');
let tabContentElement3 = document.querySelector('.tab-cont-3');

let closeTabContElem = document.querySelectorAll('.close-btn');

let closeTab1Elem = document.querySelector('.close-tab-1');
let closeTab2Elem = document.querySelector('.close-tab-2');
let closeTab3Elem = document.querySelector('.close-tab-3');

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

closeTab1Elem.addEventListener('click', function() {
  if (closeTab2Elem || closeTab3Elem) {
    closeTab1Elem.parentElement.remove();
    tabContentElement1.remove();
  }
})

closeTab2Elem.addEventListener('click', function() {
  if (closeTab1Elem || closeTab3Elem) {
    closeTab2Elem.parentElement.remove();
    tabContentElement2.remove();
  }
})

closeTab3Elem.addEventListener('click', function() {
  if (closeTab1Elem || closeTab2Elem) {
    closeTab3Elem.parentElement.remove();
    tabContentElement3.remove();
  }
})
