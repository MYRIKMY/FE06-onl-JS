const tabButtonElement1 = document.querySelector('.tab-btn-1');
const tabButtonElement2 = document.querySelector('.tab-btn-2');
const tabButtonElement3 = document.querySelector('.tab-btn-3');

const tabContentElement1 = document.querySelector('.tab-cont-1');
const tabContentElement2 = document.querySelector('.tab-cont-2');
const tabContentElement3 = document.querySelector('.tab-cont-3');

const closeTabContElem = document.querySelectorAll('.close-btn');

const closeTab1Elem = document.querySelector('.close-tab-1');
const closeTab2Elem = document.querySelector('.close-tab-2');
const closeTab3Elem = document.querySelector('.close-tab-3');

const tabBTNs = document.querySelectorAll('.tab-button').length;

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
  if (tabBTNs > 1) {
    closeTab1Elem.parentElement.remove();
    tabContentElement1.remove();
    tabBTNs--;
  }
})

closeTab2Elem.addEventListener('click', function() {
  if (tabBTNs > 1) {
    closeTab2Elem.parentElement.remove();
    tabContentElement2.remove();
    tabBTNs--;
  }
})

closeTab3Elem.addEventListener('click', function() {
  if (tabBTNs > 1) {
    closeTab3Elem.parentElement.remove();
    tabContentElement3.remove();
    tabBTNs--;
  }
})

