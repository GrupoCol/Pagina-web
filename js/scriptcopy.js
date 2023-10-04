const textElement = document.getElementById('title2');

function animateText() {
  textElement.classList.add('shown');
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if animation has already been shown
  const animationShown = sessionStorage.getItem('animationShown');
  if (!animationShown) {
    setTimeout(() => {
      animateText();
      // Set a flag to indicate animation has been shown
      sessionStorage.setItem('animationShown', 'true');
    }, 5000);
  } else {
    // If animation has already been shown, display the title immediately
    animateText();
  }
});


