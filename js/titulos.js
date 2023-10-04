const titleElement = document.getElementById('title');

function animateTitle() {
  titleElement.classList.add('shown');
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if animation has already been shown
  const animationShown = sessionStorage.getItem('animationShown');
  if (!animationShown) {
    setTimeout(() => {
      animateTitle();
      // Set a flag to indicate animation has been shown
      sessionStorage.setItem('animationShown', 'true');
    }, 2000);
  } else {
    // If animation has already been shown, display the title immediately
    animateTitle();
  }
});


