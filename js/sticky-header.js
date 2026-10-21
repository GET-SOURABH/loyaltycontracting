// Shared ES module: import caching keeps initialization unique across page bundles.
const header = document.querySelector("header.navbar");

if (header) {
  const updateScrolledState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  window.addEventListener("scroll", updateScrolledState, { passive: true });
  window.addEventListener("pageshow", updateScrolledState);
  updateScrolledState();
}
