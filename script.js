// ===== JavaScript Functions: Scope, Parameters & Return Values =====

// Global variable for animation count
let animationCount = 0;

/**
 * Trigger a spin animation on an element.
 * @param {HTMLElement} element - Element to animate
 * @param {number} duration - Animation duration in ms
 * @returns {number} Total number of animations triggered
 */
function triggerSpin(element, duration = 2000) {
  const localMessage = "Animation Triggered"; // local scope
  console.log(localMessage);

  element.classList.add("spin-animation");

  setTimeout(() => {
    element.classList.remove("spin-animation");
  }, duration);

  animationCount++;
  return animationCount;
}

/**
 * Show or hide a modal
 * @param {boolean} show - true to show, false to hide
 */
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.style.display = "flex";
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }
}

// ===== Event Listeners =====

// Trigger box spin animation
document.getElementById("triggerBtn").addEventListener("click", () => {
  const box = document.getElementById("animateBox");
  const count = triggerSpin(box, 2000);
  console.log(`Total animations triggered: ${count}`);
});

// Show modal
document.getElementById("showModalBtn").addEventListener("click", () => {
  toggleModal(true);
});

// Close modal when clicking ×
document.getElementById("closeModal").addEventListener("click", () => {
  toggleModal(false);
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    toggleModal(false);
  }
});
