(() => {
  const debounce = (fn, wait = 150) => {
    let timeoutId;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn(...args), wait);
    };
  };

  const setCurrentNav = () => {
    const pageId = document.body.dataset.page;
    if (!pageId) return;
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.removeAttribute("aria-current");
      if (link.getAttribute("data-nav") === pageId) {
        link.setAttribute("aria-current", "page");
      }
    });
  };

  const initMenuToggle = () => {
    const toggleButton = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggleButton || !nav) return;

    const closeMenu = () => {
      toggleButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    const openMenu = () => {
      toggleButton.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
    };

    toggleButton.addEventListener("click", () => {
      const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleButton.focus();
      }
    });
  };

  const initDelegatedTracking = () => {
    window.dataLayer = window.dataLayer || [];
    document.addEventListener("click", (event) => {
      const actionTarget = event.target.closest("[data-track-event]");
      if (!actionTarget) return;

      const eventName = actionTarget.getAttribute("data-track-event");
      const eventCategory = actionTarget.getAttribute("data-track-category") || "engagement";
      const eventLabel = actionTarget.getAttribute("data-track-label") || actionTarget.textContent.trim();

      window.dataLayer.push({
        event: eventName,
        event_category: eventCategory,
        event_label: eventLabel
      });
    });
  };

  const initContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const statusEl = form.querySelector("[data-form-status]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        message: String(formData.get("message") || "").trim()
      };

      if (!payload.name || !payload.email || !payload.message) {
        if (statusEl) {
          statusEl.textContent = "Please complete all required fields before submitting.";
          statusEl.className = "form-status error";
        }
        return;
      }

      try {
        // Replace the endpoint below with Formspree, Netlify Forms, or your backend URL.
        const response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        form.reset();
        if (statusEl) {
          statusEl.textContent = "Thanks! Your message was sent successfully.";
          statusEl.className = "form-status success";
        }
      } catch (error) {
        if (statusEl) {
          statusEl.textContent = "We could not send your message. Please try again.";
          statusEl.className = "form-status error";
        }
      }
    });
  };

  const initResizeTracking = () => {
    const reportResize = debounce(() => {
      const width = window.innerWidth;
      const tier = width >= 1024 ? "desktop" : width >= 768 ? "tablet" : "mobile";
      document.body.dataset.viewport = tier;
    });
    window.addEventListener("resize", reportResize);
    reportResize();
  };

  document.addEventListener("DOMContentLoaded", () => {
    setCurrentNav();
    initMenuToggle();
    initDelegatedTracking();
    initContactForm();
    initResizeTracking();

    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  });
})();
