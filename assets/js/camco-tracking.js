(() => {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const PAGE_GROUPS = {
    "/": "home",
    "/index.html": "home",
    "/about": "about",
    "/about.html": "about",
    "/residential": "residential",
    "/residential.html": "residential",
    "/home-additions": "home_additions",
    "/home-additions.html": "home_additions",
    "/deck-construction": "deck_construction",
    "/deck-construction.html": "deck_construction",
    "/commercial": "commercial",
    "/commercial.html": "commercial",
    "/contact-us": "contact",
    "/contact-us.html": "contact",
    "/projects": "projects",
    "/projects.html": "projects",
    "/join-our-team": "careers",
    "/join-our-team.html": "careers",
  };

  function pagePath() {
    return window.location.pathname || "/";
  }

  function pageGroup() {
    const path = pagePath().replace(/\/+$/, "") || "/";
    return PAGE_GROUPS[path] || PAGE_GROUPS[pagePath()] || "other";
  }

  function cleanParams(params) {
    const out = {};
    Object.keys(params || {}).forEach((key) => {
      const value = params[key];
      if (value === undefined || value === null || value === "") {
        return;
      }
      out[key] = String(value).slice(0, 100);
    });
    return out;
  }

  function track(eventName, params) {
    const payload = Object.assign(
      {
        event: eventName,
        page_group: pageGroup(),
        page_path: pagePath(),
      },
      cleanParams(params)
    );
    window.dataLayer.push(payload);
    const gtagParams = Object.assign({ send_to: "G-7JP0LPLE2V" }, payload);
    delete gtagParams.event;
    window.gtag("event", eventName, gtagParams);
  }

  window.camcoTrack = {
    generateLead: function (method, extra) {
      track(
        "generate_lead",
        Object.assign({ method: method || "unknown" }, extra)
      );
    },
    formSubmit: function (formType, extra) {
      track(
        "form_submit",
        Object.assign({ form_type: formType || "unknown" }, extra)
      );
    },
    estimateSubmit: function (extra) {
      const details = Object.assign({ form_type: "estimate" }, extra);
      window.camcoTrack.formSubmit("estimate", details);
      window.camcoTrack.generateLead("form", details);
    },
    careersSubmit: function (extra) {
      window.camcoTrack.formSubmit(
        "careers",
        Object.assign({ form_type: "careers" }, extra)
      );
    },
  };

  document.addEventListener(
    "click",
    function (event) {
      const link = event.target && event.target.closest
        ? event.target.closest("a[href]")
        : null;
      if (!link) {
        return;
      }
      const href = link.getAttribute("href") || "";
      if (/^tel:/i.test(href)) {
        window.camcoTrack.generateLead("phone");
        return;
      }
      if (/^mailto:/i.test(href)) {
        window.camcoTrack.generateLead("email");
      }
    },
    true
  );
})();
