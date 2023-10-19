const bottomElement = document.getElementById('botones2');

function animateBottom() {
  bottomElement.classList.add('.botones-header.shown');
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if animation has already been shown
  const animationShown = sessionStorage.getItem('animationShown');
  if (!animationShown) {
    setTimeout(() => {
      animateBottom();
      // Set a flag to indicate animation has been shown
      sessionStorage.setItem('animationShown', 'true');
    }, 1000);
  } else {
    // If animation has already been shown, display the title immediately
    animateBottom();
  }
});



