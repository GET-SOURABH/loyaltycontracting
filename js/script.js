// CSS sticky positioning remains available if this visual enhancement cannot load.
import("./sticky-header.js").catch(() => {});

function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, parameters);
  } catch (_) {
    // Analytics must never interrupt navigation or form submission.
  }
}

function getFormName(form) {
  if (form.id === "quote-form") return "main_quote_form";
  if (form.id === "contact-form") return "contact_form";
  if (form.id === "quick-consultation-form") return "popup_quote_form";
  return "website_form";
}

const heroVideo = document.querySelector(".hero-video[data-src]");

if (heroVideo) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const shouldLoadHeroVideo =
    window.matchMedia("(min-width: 721px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !connection?.saveData &&
    !["slow-2g", "2g"].includes(connection?.effectiveType);

  if (shouldLoadHeroVideo) {
    const loadHeroVideo = () => {
      heroVideo.src = heroVideo.dataset.src;
      heroVideo.addEventListener(
        "canplay",
        () => {
          heroVideo.classList.add("is-ready");
          heroVideo.play().catch(() => {
            // The responsive poster remains visible if autoplay is unavailable.
          });
        },
        { once: true }
      );
      heroVideo.load();
    };

    const scheduleHeroVideo = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadHeroVideo, { timeout: 1500 });
      } else {
        window.setTimeout(loadHeroVideo, 0);
      }
    };

    if (document.readyState === "complete") scheduleHeroVideo();
    else window.addEventListener("load", scheduleHeroVideo, { once: true });
  }
}

document.querySelectorAll(".before-after-card").forEach((card) => {
  const slider = card.querySelector(".ba-range");
  if (!slider) return;

  slider.addEventListener("input", () => {
    card.style.setProperty("--position", `${slider.value}%`);
  });
});

const expandableReviews = Array.from(document.querySelectorAll(".review-card .review-toggle[aria-controls]"))
  .map((openButton) => {
    const panel = document.getElementById(openButton.getAttribute("aria-controls"));
    const closeButton = panel?.querySelector(".review-close");
    return panel && closeButton ? { openButton, panel, closeButton, animation: null } : null;
  })
  .filter(Boolean);

if (expandableReviews.length) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const cancelReviewAnimation = (review) => {
    if (!review.animation) return;
    review.animation.onfinish = null;
    review.animation.cancel();
    review.animation = null;
  };

  const setReviewExpanded = (review, expanded, { animate = true, moveFocus = true } = {}) => {
    const { openButton, panel, closeButton } = review;
    // Carry the visible panel's height into a switch so the shared area resizes smoothly.
    const visiblePanel = expanded ? expandableReviews.find((item) => !item.panel.hidden)?.panel : panel;
    const startHeight = visiblePanel && !visiblePanel.hidden ? visiblePanel.getBoundingClientRect().height : 0;
    cancelReviewAnimation(review);

    if (expanded) {
      expandableReviews.forEach((other) => {
        if (other !== review && !other.panel.hidden) {
          setReviewExpanded(other, false, { animate: false, moveFocus: false });
        }
      });
    }

    openButton.setAttribute("aria-expanded", String(expanded));
    closeButton.setAttribute("aria-expanded", String(expanded));
    openButton.querySelector("span").textContent = expanded ? "Read less" : "Read more";
    openButton.querySelector("path").setAttribute("d", expanded ? "m3 7.5 3-3 3 3" : "m3 4.5 3 3 3-3");
    panel.hidden = false;
    if (expanded) {
      panel.inert = false;
      panel.setAttribute("aria-hidden", "false");
    }

    const focusTarget = expanded ? panel : openButton;
    if (moveFocus) focusTarget.focus({ preventScroll: true });
    if (!expanded) {
      panel.inert = true;
      panel.setAttribute("aria-hidden", "true");
    }

    if (animate && !reducedMotion.matches && typeof panel.animate === "function") {
      review.animation = panel.animate(
        [
          { height: `${startHeight}px`, overflow: "hidden" },
          { height: `${expanded ? panel.getBoundingClientRect().height : 0}px`, overflow: "hidden" },
        ],
        { duration: 240, easing: "ease-in-out" }
      );
      review.animation.onfinish = () => {
        panel.hidden = !expanded;
        review.animation = null;
      };
    } else {
      panel.hidden = !expanded;
    }

    // Return to the trigger without an abrupt focus-induced scroll on collapse.
    if (moveFocus) {
      focusTarget.scrollIntoView({
        behavior: reducedMotion.matches ? "instant" : "smooth",
        block: "nearest",
      });
    }
  };

  expandableReviews.forEach((review) => {
    review.openButton.addEventListener("click", () => {
      setReviewExpanded(review, review.openButton.getAttribute("aria-expanded") !== "true");
    });
    review.closeButton.addEventListener("click", () => setReviewExpanded(review, false));
    review.openButton.hidden = false;
  });

  reducedMotion.addEventListener("change", () => {
    if (!reducedMotion.matches) return;
    expandableReviews.forEach((review) => {
      cancelReviewAnimation(review);
      review.panel.hidden = review.openButton.getAttribute("aria-expanded") !== "true";
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", targetId);
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
  ).filter((element) => element.offsetParent !== null);
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

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const hamburger = document.querySelector('label[for="nav-toggle"].hamburger');
  const mobileMenu = document.getElementById("mobile-menu");
  if (!navToggle) return;

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
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_to_call", { link_location: "website" }));
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_email", { link_location: "website" }));
});

document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_whatsapp", { link_location: "website" }));
});

document.querySelectorAll(".quote-cta").forEach((control) => {
  control.addEventListener("click", () => trackEvent("quote_cta_click", { cta_text: control.textContent.trim() }));
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (!submitButton) return;

    const formName = getFormName(form);
    trackEvent("form_submit", { form_name: formName });

    if (!submitButton.dataset.originalText) {
      submitButton.dataset.originalText = submitButton.innerHTML;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      const response = await fetch(form.getAttribute("action") || "https://formspree.io/f/xqeopjjj", {
        method: form.getAttribute("method") || "POST",
        body: new FormData(form),
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

      trackEvent("generate_lead", { form_name: formName });
      form.reset();
      if (form.id === "quick-consultation-form" || form.closest("#quoteBottomPopup")) {
        closeQuotePopup();
      }
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
});

document.querySelectorAll(".reel-card").forEach((card) => {
  const playButton = card.querySelector(".reel-play-button");
  const thumbnail = card.querySelector(".reel-thumbnail");
  const video = card.querySelector(".reel-video");
  if (!playButton || !thumbnail || !video) return;

  playButton.addEventListener("click", () => {
    document.querySelectorAll(".reel-video").forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });

    if (!video.src && video.dataset.src) {
      video.src = video.dataset.src;
      video.load();
    }

    thumbnail.hidden = true;
    playButton.hidden = true;
    video.style.display = "block";
    video.play().catch(() => {
      // Native controls remain available if autoplay after the click is blocked.
    });
  });
});
