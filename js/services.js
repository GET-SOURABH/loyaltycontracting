function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, parameters);
  } catch (_) {
    // Analytics must never interrupt navigation or form submission.
  }
}

document.querySelectorAll(".before-after-card").forEach((card) => {
  const slider = card.querySelector(".ba-range");
  if (!slider) return;

  slider.addEventListener("input", () => {
    card.style.setProperty("--position", `${slider.value}%`);
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("active"));
}

document.querySelectorAll(".desktop-nav .dropdown").forEach((dropdown) => {
  const button = dropdown.querySelector(".services-menu-button");
  if (!button) return;

  const closeMenu = () => {
    dropdown.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !dropdown.classList.contains("is-open");
    dropdown.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });

  dropdown.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMenu();
    button.focus();
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) closeMenu();
  });
});

const quotePopupButtons = document.querySelectorAll(".open-quote-popup");
const quotePopup = document.getElementById("quoteBottomPopup");
const quotePopupOverlay = document.getElementById("quotePopupOverlay");
const quotePopupClose = document.getElementById("quotePopupClose");
let lastFocusedElement = null;

function openQuotePopup(event) {
  if (event) event.preventDefault();
  if (!quotePopup || !quotePopupOverlay) return;

  lastFocusedElement = document.activeElement;
  quotePopup.classList.add("active");
  quotePopupOverlay.classList.add("active");
  quotePopupOverlay.setAttribute("aria-hidden", "false");
  quotePopup.removeAttribute("inert");
  quotePopup.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const firstField = quotePopup.querySelector("input, button, select, textarea");
  if (firstField) firstField.focus();
}

function closeQuotePopup() {
  if (!quotePopup || !quotePopupOverlay) return;

  quotePopup.classList.remove("active");
  quotePopupOverlay.classList.remove("active");
  quotePopupOverlay.setAttribute("aria-hidden", "true");
  quotePopup.setAttribute("aria-hidden", "true");
  quotePopup.setAttribute("inert", "");
  document.body.style.overflow = "";

  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

quotePopupButtons.forEach((button) => button.addEventListener("click", openQuotePopup));
if (quotePopupClose) quotePopupClose.addEventListener("click", closeQuotePopup);
if (quotePopupOverlay) quotePopupOverlay.addEventListener("click", closeQuotePopup);

document.addEventListener("keydown", (event) => {
  if (!quotePopup || !quotePopup.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeQuotePopup();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = Array.from(
    quotePopup.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]')
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const navToggle = document.getElementById("nav-toggle");
const hamburger = document.querySelector('label[for="nav-toggle"].hamburger');
const mobileMenu = document.getElementById("mobile-menu");

if (navToggle) {
  const updateMobileMenu = () => {
    document.body.classList.toggle("mobile-nav-open", navToggle.checked);
    if (hamburger) hamburger.setAttribute("aria-expanded", String(navToggle.checked));
    if (mobileMenu) {
      if (navToggle.checked) mobileMenu.removeAttribute("inert");
      else mobileMenu.setAttribute("inert", "");
    }
  };

  navToggle.addEventListener("change", updateMobileMenu);

  if (hamburger) {
    hamburger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      navToggle.checked = !navToggle.checked;
      updateMobileMenu();
    });
  }

  document.querySelectorAll(".mobile-menu-panel a, .mobile-menu-backdrop").forEach((control) => {
    control.addEventListener("click", () => {
      navToggle.checked = false;
      updateMobileMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !navToggle.checked) return;
    navToggle.checked = false;
    updateMobileMenu();
    if (hamburger) hamburger.focus();
  });

  updateMobileMenu();
}

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_to_call", { link_location: "service_page" }));
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_email", { link_location: "service_page" }));
});

document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_whatsapp", { link_location: "service_page" }));
});

document.querySelectorAll(".quote-cta").forEach((control) => {
  control.addEventListener("click", () => trackEvent("quote_cta_click", { cta_text: control.textContent.trim() }));
});

const quoteForm = document.getElementById("quick-consultation-form");

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    trackEvent("form_submit", { form_name: "popup_quote_form" });

    if (!submitButton.dataset.originalText) {
      submitButton.dataset.originalText = submitButton.innerHTML;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      const response = await fetch(quoteForm.action, {
        method: quoteForm.method || "POST",
        body: new FormData(quoteForm),
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message = Array.isArray(result.errors)
          ? result.errors.map((error) => error.message).join("\n")
          : "An error occurred. Please try again.";
        window.setTimeout(() => window.alert(`Error: ${message}`), 10);
        return;
      }

      trackEvent("generate_lead", { form_name: "popup_quote_form" });
      quoteForm.reset();
      closeQuotePopup();
      window.setTimeout(() => window.alert("Form submitted successfully!"), 10);
    } catch (error) {
      console.error("Submission error:", error);
      window.setTimeout(
        () => window.alert("Network error. Please check your connection and try again."),
        10
      );
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = submitButton.dataset.originalText;
    }
  });
}
