let counter = 0;
const targetSection = document.getElementById('targetSection');
const counterElement = document.getElementById('counter');

window.addEventListener('scroll', () => {
  if (isElementInViewport(targetSection)) {
    startCounter();
    window.removeEventListener('scroll', onScroll);
  }
});

function startCounter() {
  const interval = setInterval(() => {
    counterElement.innerText = counter;
    counter++;
    if (counter > 3500) {
      clearInterval(interval);
      counterElement.innerText = '3500';
    }
  }, 1);
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
