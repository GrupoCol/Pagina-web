function updateCounter(start, end, counterElement) {
  let counter = start;
  const intervalId = setInterval(() => {
    counterElement.innerText = counter;
    counter++;
    if (counter > end) {
      clearInterval(intervalId);
      counterElement.innerText = end;
    }
  }, 1);
}

function startCounterOnScroll(start, end, counterElement, targetSection) {
  let counting = false;

  function checkStartCounter() {
    if (isElementInViewport(targetSection) && !counting) {
      counting = true;
      counter = start;
      updateCounter(start, end, counterElement);
    }
  }

  window.addEventListener('scroll', checkStartCounter);
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const counter1Element = document.getElementById('counter1');
const targetSection1 = document.getElementById('targetSection1');
startCounterOnScroll(0, 5, counter1Element, targetSection1);

const counter2Element = document.getElementById('counter2');
const targetSection2 = document.getElementById('targetSection2');
startCounterOnScroll(0, 10, counter2Element, targetSection2);

const counter3Element = document.getElementById('counter3');
const targetSection3 = document.getElementById('targetSection3');
startCounterOnScroll(0, 350, counter3Element, targetSection3);

const counter4Element = document.getElementById('counter4');
const targetSection4 = document.getElementById('targetSection4');
startCounterOnScroll(0, 3500, counter4Element, targetSection4);
