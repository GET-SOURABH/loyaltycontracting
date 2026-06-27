const tabButtons = document.querySelectorAll(".tabs button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


// Before / After sliders
const beforeAfterCards = document.querySelectorAll(".before-after-card");

beforeAfterCards.forEach((card) => {
  const slider = card.querySelector(".ba-range");

  slider.addEventListener("input", () => {
    card.style.setProperty("--position", slider.value + "%");
  });
});


// Aesthetic Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    
    // Skip if it's just a dummy link like href="#"
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault(); // Stop default instant jump

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    // ADJUST SPEED HERE: 1500 = 1.5 seconds. Higher = slower.
    const duration = 1500; 
    let startTime = null;

    // Easing function (easeInOutQuart) for a very smooth cinematic glide
    function easeInOutQuart(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t * t + b;
      t -= 2;
      return -c / 2 * (t * t * t * t - 2) + b;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Snap to exact position at the very end just to be safe
        window.scrollTo(0, targetPosition); 
      }
    }

    requestAnimationFrame(animation);
  });
});





// Scroll Reveal Effect
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the element is visible on the screen
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // Optional: Stop observing once it has been revealed so it doesn't repeat 
      // every time you scroll up and down.
      observer.unobserve(entry.target); 
    }
  });
}, {
  root: null,
  threshold: 0.15, // Triggers when 15% of the element is visible
  rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the very bottom
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});



// Bottom Quick Quote Popup
const quotePopupButtons = document.querySelectorAll(".open-quote-popup");
const quotePopup = document.getElementById("quoteBottomPopup");
const quotePopupOverlay = document.getElementById("quotePopupOverlay");
const quotePopupClose = document.getElementById("quotePopupClose");

function openQuotePopup(event) {
  event.preventDefault();

  quotePopup.classList.add("active");
  quotePopupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuotePopup() {
  quotePopup.classList.remove("active");
  quotePopupOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

quotePopupButtons.forEach((button) => {
  button.addEventListener("click", openQuotePopup);
});

quotePopupClose.addEventListener("click", closeQuotePopup);
quotePopupOverlay.addEventListener("click", closeQuotePopup);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeQuotePopup();
  }
});


// Add strong blur class when mobile menu opens
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");

  if (!navToggle) return;

  navToggle.addEventListener("change", function () {
    if (navToggle.checked) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }
  });
});
