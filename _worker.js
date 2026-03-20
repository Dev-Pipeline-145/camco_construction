const REWRITE_MAP = new Map([
  ["/", "/camco-homepage"],

  ["/about", "/camco-about"],
  ["/about/", "/camco-about"],
  ["/contact-us", "/camco-contact"],
  ["/contact-us/", "/camco-contact"],
  ["/join-our-team", "/camco-join-our-team"],
  ["/join-our-team/", "/camco-join-our-team"],
  ["/home-additions", "/camco-home-additions"],
  ["/home-additions/", "/camco-home-additions"],
  ["/projects", "/camco-projects"],
  ["/projects/", "/camco-projects"],
  ["/commercial", "/camco-commercial"],
  ["/commercial/", "/camco-commercial"],
  ["/residential", "/camco-residential"],
  ["/residential/", "/camco-residential"],
  ["/deck-construction", "/camco-deck-construction"],
  ["/deck-construction/", "/camco-deck-construction"],

  ["/camco-about", "/camco-about"],
  ["/camco-about/", "/camco-about"],
  ["/camco-contact", "/camco-contact"],
  ["/camco-contact/", "/camco-contact"],
  ["/camco-join-our-team", "/camco-join-our-team"],
  ["/camco-join-our-team/", "/camco-join-our-team"],
  ["/camco-home-additions", "/camco-home-additions"],
  ["/camco-home-additions/", "/camco-home-additions"],

  ["/commercial-contracting", "/camco-commercial"],
  ["/commercial-contracting/", "/camco-commercial"],
  ["/general-contracting", "/camco-commercial"],
  ["/general-contracting/", "/camco-commercial"],
  ["/residential-contracting", "/camco-residential"],
  ["/residential-contracting/", "/camco-residential"],
  ["/home-addition", "/camco-home-additions"],
  ["/home-addition/", "/camco-home-additions"],
  ["/accessibility-ramps", "/camco-residential"],
  ["/accessibility-ramps/", "/camco-residential"],
  ["/wheelchair-ramps", "/camco-residential"],
  ["/wheelchair-ramps/", "/camco-residential"],
  ["/for-realtors", "/camco-commercial"],
  ["/for-realtors/", "/camco-commercial"],

  ["/camco-residential-page.html", "/camco-residential"],
  ["/camco-accessibility-ramps.html", "/camco-residential"],
  ["/camco-for-realtors.html", "/camco-commercial"],

  ["/magnolia-remodel", "/camco-projects"],
  ["/magnolia-remodel/", "/camco-projects"],
  ["/esumac-deck", "/camco-deck-construction"],
  ["/esumac-deck/", "/camco-deck-construction"],
  ["/wp-admin", "/camco-homepage"],
  ["/wp-admin/", "/camco-homepage"],
  ["/wp-login.php", "/camco-homepage"],
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
