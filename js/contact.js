function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, parameters);
  } catch (_) {
    // Analytics must never interrupt navigation or form submission.
  }
}

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
  link.addEventListener("click", () => trackEvent("click_to_call", { link_location: "contact_page" }));
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_email", { link_location: "contact_page" }));
});

document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_whatsapp", { link_location: "contact_page" }));
});

document.querySelectorAll(".quote-cta").forEach((control) => {
  control.addEventListener("click", () => trackEvent("quote_cta_click", { cta_text: control.textContent.trim() }));
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    trackEvent("form_submit", { form_name: "contact_form" });

    if (!submitButton.dataset.originalText) {
      submitButton.dataset.originalText = submitButton.innerHTML;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method || "POST",
        body: new FormData(contactForm),
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

      trackEvent("generate_lead", { form_name: "contact_form" });
      contactForm.reset();
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
