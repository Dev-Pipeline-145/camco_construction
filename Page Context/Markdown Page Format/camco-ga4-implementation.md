# Camco Construction — Google Analytics 4 Implementation Guide

**Measurement ID:** `G-1R87642CKG`  
**Property:** Camco Construction Inc. — www.CamcoConstruction.net  
**Document Purpose:** Complete copy-paste implementation reference for GA4 on all pages.

---

## STEP 1 — Base Tag (Every Page, Every Time)

Paste this block immediately after the opening `<head>` tag on **every single page** of the site. No exceptions. Any page missing this tag will not be tracked.

```html
<!-- ============================================================ -->
<!-- Google Analytics 4 — Camco Construction                     -->
<!-- Measurement ID: G-1R87642CKG                                -->
<!-- ADD TO EVERY PAGE — immediately after opening <head> tag    -->
<!-- ============================================================ -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-1R87642CKG"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-1R87642CKG", {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    cookie_flags: "SameSite=None;Secure",
  });
</script>
<!-- ============================================================ -->
```

### Verification Checklist

After adding to all pages, verify in GA4:

1. Go to **GA4 > Reports > Realtime**
2. Open each page of the website in a browser tab
3. Confirm active users appear in the Realtime report within 30 seconds
4. Check **Pages and screens** in Realtime to confirm each page URL is registering separately

---

## STEP 2 — Per-Page Event Tracking Code

Copy the appropriate block for each page. Each block contains all tracked events for that page pre-configured with the correct `service_category` value.

---

### HOMEPAGE — `/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Homepage                               -->
<!-- ============================================================ -->
<script>
  // ---- Phone Click Tracking ----
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "general",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  // ---- Email Click Tracking ----
  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "general",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  // ---- CTA Button Click Tracking ----
  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "cta_button",
      service_category: "general",
      lead_source_page: window.location.href,
    });
  }

  // ---- Scroll Depth Tracking ----
  var scrollDepths = [25, 50, 75, 100];
  var scrollFired = {};
  window.addEventListener("scroll", function () {
    var scrollPct = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    scrollDepths.forEach(function (depth) {
      if (scrollPct >= depth && !scrollFired[depth]) {
        scrollFired[depth] = true;
        gtag("event", "scroll", {
          event_category: "engagement",
          event_label: "scroll_" + depth + "_percent",
          page_location: window.location.href,
        });
      }
    });
  });
</script>

<!-- Apply to phone number links: -->
<!-- <a href="tel:+15095361818" onclick="trackPhoneClick()">509-536-1818</a> -->

<!-- Apply to email links: -->
<!-- <a href="mailto:info@CamcoConstruction.net" onclick="trackEmailClick()">info@CamcoConstruction.net</a> -->

<!-- Apply to CTA buttons: -->
<!-- <a href="/about/#contact" onclick="trackCTAClick('homepage_hero_cta')">Get a Free Estimate</a> -->
<!-- <a href="/about/#contact" onclick="trackCTAClick('homepage_closing_cta')">Request a Free Estimate</a> -->
```

---

### RESIDENTIAL PAGE — `/residential/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Residential Services                   -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "residential",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "residential",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "residential_cta",
      service_category: "residential",
      lead_source_page: window.location.href,
    });
  }
</script>
```

---

### HOME ADDITIONS PAGE — `/home-additions/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Home Additions                         -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "home_additions",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "home_additions",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "home_additions_cta",
      service_category: "home_additions",
      lead_source_page: window.location.href,
    });
  }
</script>
```

---

### DECK CONSTRUCTION PAGE — `/deck-construction/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Deck Construction                      -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "deck_construction",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "deck_construction",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "deck_cta",
      service_category: "deck_construction",
      lead_source_page: window.location.href,
    });
  }
</script>
```

---

### COMMERCIAL & EXCAVATION PAGE — `/commercial/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Commercial & Excavation                -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "commercial",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "commercial",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "commercial_cta",
      service_category: "commercial",
      lead_source_page: window.location.href,
    });
  }
</script>
```

---

### ACCESSIBILITY & RAMPS PAGE — `/accessibility-ramps/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — Accessibility & Ramps                  -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "accessibility",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "accessibility",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  function trackCTAClick(label) {
    gtag("event", "click", {
      event_category: "cta",
      event_label: label || "accessibility_cta",
      service_category: "accessibility",
      lead_source_page: window.location.href,
    });
  }
</script>
```

---

### ABOUT & CONTACT PAGE — `/about/`

```html
<!-- ============================================================ -->
<!-- GA4 Event Tracking — About & Contact                        -->
<!-- Includes form submission tracking                           -->
<!-- ============================================================ -->
<script>
  function trackPhoneClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "phone_click",
      service_category: "contact",
      contact_method: "phone",
      lead_source_page: window.location.href,
    });
  }

  function trackEmailClick() {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "email_click",
      service_category: "contact",
      contact_method: "email",
      lead_source_page: window.location.href,
    });
  }

  // ---- Contact Form Submission ----
  // Call this function on form submit or when thank-you state appears
  function trackFormSubmit(projectType) {
    // Primary lead event
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: "form_submit",
      service_category: projectType || "contact",
      contact_method: "form",
      lead_source_page: window.location.href,
    });

    // Secondary form event for GA4 form reports
    gtag("event", "form_submit", {
      event_category: "contact",
      event_label: "contact_form",
      form_name: "camco_contact_form",
      lead_source_page: window.location.href,
    });
  }

  // ---- Wire up form on page load ----
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        var projectTypeField = form.querySelector('[name="project_type"]');
        var projectType = projectTypeField ? projectTypeField.value : "unknown";
        trackFormSubmit(projectType);
      });
    }
  });
</script>
```

---

## STEP 3 — GA4 Admin Configuration

Complete these steps inside GA4 Admin. You only do these once — they apply to all data going forward.

### 3A — Custom Dimensions

**GA4 Admin > Property > Custom Definitions > Custom Dimensions > Create**

Create these three dimensions in order:

| #   | Dimension Name   | Scope | Parameter Name     |
| --- | ---------------- | ----- | ------------------ |
| 1   | Service Category | Event | `service_category` |
| 2   | Lead Source Page | Event | `lead_source_page` |
| 3   | Contact Method   | Event | `contact_method`   |

---

### 3B — Conversions — Mark generate_lead as a Conversion

**GA4 Admin > Property > Events**

Once the site is live and `generate_lead` events are firing:

1. Find `generate_lead` in the event list
2. Toggle **Mark as conversion** to ON
3. Also mark `form_submit` as a conversion

This makes leads appear in the Conversions report and enables conversion-based audience building.

---

### 3C — Key Events to Monitor in GA4 Reports

After launch, check these reports weekly:

**Reports > Engagement > Events**

- `generate_lead` — total leads by source
- `form_submit` — contact form completions
- `click` — CTA button engagement
- `scroll` — scroll depth by page

**Reports > Acquisition > Traffic Acquisition**

- Filter by `First user medium = organic` to see SEO-driven leads
- Compare organic vs. direct vs. referral week over week

**Reports > Engagement > Pages and Screens**

- Sort by `Event count` for `generate_lead` to see which pages generate the most leads
- This tells you which service pages are working and which need improvement

---

## STEP 4 — Google Search Console Integration

### 4A — Verify Site Ownership

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://www.camcoconstruction.net`
3. Choose **HTML tag** verification method
4. Add the verification meta tag to the `<head>` of the homepage:

```html
<!-- Google Search Console Verification — add to homepage <head> only -->
<meta
  name="google-site-verification"
  content="[VERIFICATION CODE FROM SEARCH CONSOLE]"
/>
```

5. Click Verify in Search Console

---

### 4B — Link Search Console to GA4

1. In **GA4 Admin > Property > Search Console Links**
2. Click **Link**
3. Select the verified Search Console property for camcoconstruction.net
4. Select the web data stream
5. Click **Submit**

This unlocks the **Search Console** reports inside GA4 showing exactly which Google search queries bring visitors to each page — the most valuable SEO feedback loop available.

---

### 4C — Submit XML Sitemap

In Google Search Console > **Sitemaps**, submit:

```
https://www.camcoconstruction.net/sitemap.xml
```

If the site platform (WordPress or similar) generates a sitemap automatically, submit that URL. If not, the sitemap should be created manually:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.camcoconstruction.net/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.camcoconstruction.net/residential/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.camcoconstruction.net/commercial/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.camcoconstruction.net/accessibility-ramps/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.camcoconstruction.net/projects/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.camcoconstruction.net/about/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

Update and resubmit the sitemap each time a new page goes live.

---

## STEP 5 — Weekly Monitoring Checklist

Once live, review the following in GA4 every week:

| Check                                | Where in GA4                                          | What to Look For                       |
| ------------------------------------ | ----------------------------------------------------- | -------------------------------------- |
| Total leads this week                | Reports > Conversions                                 | Week-over-week trend                   |
| Which pages generated leads          | Reports > Pages and screens > filter by generate_lead | Highest performing pages               |
| Which service generated leads        | Reports > Events > service_category dimension         | Where to invest content effort         |
| Organic traffic trend                | Reports > Acquisition > Traffic Acquisition           | Growth from SEO                        |
| Search queries driving traffic       | Reports > Search Console > Queries                    | Which keywords are working             |
| Pages with impressions but no clicks | Search Console > Search Results                       | Fix title/meta on those pages          |
| Phone vs. email vs. form split       | Reports > Events > contact_method dimension           | Understand how leads prefer to contact |

---

## Quick Reference — All Measurement IDs & Accounts

| Asset                 | ID / URL                                   |
| --------------------- | ------------------------------------------ |
| GA4 Measurement ID    | `G-1R87642CKG`                             |
| Website               | `https://www.camcoconstruction.net`        |
| Google Search Console | `https://search.google.com/search-console` |
| GA4 Admin             | `https://analytics.google.com`             |
| Phone (tracked)       | `tel:+15095361818`                         |
| Email (tracked)       | `mailto:info@CamcoConstruction.net`        |
| WA Contractor License | `CAMCOCI799L5`                             |

---

_Document prepared for Camco Construction Inc. · Leif Challender, President · 509-536-1818 · info@CamcoConstruction.net_  
_Lic. #CAMCOCI799L5 · Licensed in WA & ID · www.CamcoConstruction.net_
