const REWRITE_MAP = new Map([
  ["/", "/camco-homepage.html"],

  ["/about", "/camco-about.html"],
  ["/about/", "/camco-about.html"],
  ["/contact-us", "/camco-contact.html"],
  ["/contact-us/", "/camco-contact.html"],
  ["/join-our-team", "/camco-join-our-team.html"],
  ["/join-our-team/", "/camco-join-our-team.html"],
  ["/home-additions", "/camco-home-additions.html"],
  ["/home-additions/", "/camco-home-additions.html"],
  ["/projects", "/camco-projects.html"],
  ["/projects/", "/camco-projects.html"],
  ["/commercial", "/camco-commercial.html"],
  ["/commercial/", "/camco-commercial.html"],
  ["/residential", "/camco-residential.html"],
  ["/residential/", "/camco-residential.html"],
  ["/deck-construction", "/camco-deck-construction.html"],
  ["/deck-construction/", "/camco-deck-construction.html"],

  ["/camco-about", "/camco-about.html"],
  ["/camco-about/", "/camco-about.html"],
  ["/camco-contact", "/camco-contact.html"],
  ["/camco-contact/", "/camco-contact.html"],
  ["/camco-join-our-team", "/camco-join-our-team.html"],
  ["/camco-join-our-team/", "/camco-join-our-team.html"],
  ["/camco-home-additions", "/camco-home-additions.html"],
  ["/camco-home-additions/", "/camco-home-additions.html"],

  ["/commercial-contracting", "/camco-commercial.html"],
  ["/commercial-contracting/", "/camco-commercial.html"],
  ["/general-contracting", "/camco-commercial.html"],
  ["/general-contracting/", "/camco-commercial.html"],
  ["/residential-contracting", "/camco-residential.html"],
  ["/residential-contracting/", "/camco-residential.html"],
  ["/home-addition", "/camco-home-additions.html"],
  ["/home-addition/", "/camco-home-additions.html"],
  ["/accessibility-ramps", "/camco-residential.html"],
  ["/accessibility-ramps/", "/camco-residential.html"],
  ["/wheelchair-ramps", "/camco-residential.html"],
  ["/wheelchair-ramps/", "/camco-residential.html"],
  ["/for-realtors", "/camco-commercial.html"],
  ["/for-realtors/", "/camco-commercial.html"],

  ["/camco-residential-page.html", "/camco-residential.html"],
  ["/camco-accessibility-ramps.html", "/camco-residential.html"],
  ["/camco-for-realtors.html", "/camco-commercial.html"],

  ["/magnolia-remodel", "/camco-projects.html"],
  ["/magnolia-remodel/", "/camco-projects.html"],
  ["/esumac-deck", "/camco-deck-construction.html"],
  ["/esumac-deck/", "/camco-deck-construction.html"],
  ["/wp-admin", "/camco-homepage.html"],
  ["/wp-admin/", "/camco-homepage.html"],
  ["/wp-login.php", "/camco-homepage.html"],
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Do not interfere with static assets or API-like paths.
    if (url.pathname.startsWith("/Assets/") || url.pathname.startsWith("/Logo/")) {
      return env.ASSETS.fetch(request);
    }

    const targetPath = REWRITE_MAP.get(url.pathname);
    if (!targetPath) {
      return env.ASSETS.fetch(request);
    }

    const rewriteUrl = new URL(request.url);
    rewriteUrl.pathname = targetPath;
    return env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
  },
};
