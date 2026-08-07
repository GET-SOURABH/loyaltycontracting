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


// Add strong blur class when mobile menu opens and close on link/backdrop click
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

  document.querySelectorAll(".mobile-menu-panel a, .mobile-menu-backdrop").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
      document.body.classList.remove("mobile-nav-open");
    });
  });
});

// Form Submission Logic
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;

      // Safely store original text in a data attribute to prevent double-click overwriting
      if (!submitBtn.dataset.originalText) {
        submitBtn.dataset.originalText = submitBtn.innerHTML;
      }
      const originalBtnText = submitBtn.dataset.originalText;

      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      try {
        const formData = new FormData(form);
        const url = form.getAttribute('action') || "https://formspree.io/f/xqeopjjj";

        const response = await fetch(url, {
          method: form.getAttribute('method') || 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json();

        // Restore button state before alert/reset to ensure it applies properly
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (response.ok) {
          form.reset();

          // Close popup if it exists
          if (typeof closeQuotePopup === 'function' && (form.id === 'quick-consultation-form' || form.closest('#quoteBottomPopup'))) {
            closeQuotePopup();
          }

          // Show alert after DOM updates
          setTimeout(() => {
            alert('Form submitted successfully!');
          }, 10);
        } else {
          // Handle validation errors or server errors
          let errorMsg = 'An error occurred. Please try again.';
          if (result.errors && result.errors.length > 0) {
            errorMsg = result.errors.map(err => err.message).join('\n');
          }
          setTimeout(() => alert('Error: ' + errorMsg), 10);
        }
      } catch (error) {
        console.error('Submission error:', error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        setTimeout(() => alert('Network error. Please check your connection and try again.'), 10);
      }
    });
  });
});



/* ========================================
   PROJECT REELS
======================================== */

document.querySelectorAll(".reel-card").forEach((card) => {

  const playButton = card.querySelector(".reel-play-button");
  const thumbnail = card.querySelector(".reel-thumbnail");
  const video = card.querySelector(".reel-video");

  playButton.addEventListener("click", () => {

    // Stop any other reel that is currently playing
    document.querySelectorAll(".reel-video").forEach((otherVideo) => {

      if (otherVideo !== video) {
        otherVideo.pause();
      }

    });


    // Load video only when clicked
    if (!video.src) {

      const videoSource = video.dataset.src;

      video.src = videoSource;

      video.load();
    }


    // Hide thumbnail and play button
    thumbnail.style.display = "none";
    playButton.style.display = "none";


    // Show video
    video.style.display = "block";


    // Play video
    video.play().catch((error) => {
      console.log("Video playback was prevented:", error);
    });

  });

});