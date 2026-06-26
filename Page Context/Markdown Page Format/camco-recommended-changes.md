# Camco Construction — Recommended Changes Before Launch

**Document Purpose:** Pre-launch fix list for the three pages already built (Homepage, Residential, Commercial) plus structural changes needed across the site.  
**Priority Order:** Critical fixes first, then improvements, then ongoing.

---

## CRITICAL — Fix Before Launch

### 1. Commercial Page — H1 Headline Must Lead With Primary Keyword

**Current H1:**

> Tenant Improvements & Commercial Build-Outs

**Problem:** The title tag targets "Commercial Contractor Spokane WA" but the H1 doesn't match. Google compares the two. When they diverge, ranking strength is diluted.

**Recommended H1:**

> Commercial Contractor Spokane WA — Tenant Improvements & Build-Outs

**Why:** The H1 and title tag should target the same primary keyword. The service description ("Tenant Improvements & Build-Outs") stays — it just moves after the keyword.

---

### 2. Commercial Page — Add Excavation Content

**Current state:** Excavation is referenced in footer links but has zero body content or keywords on the commercial page.

**Problem:** "Excavation contractor Spokane WA" is a Tier 2 keyword with real search volume. Until a dedicated excavation page is built, the commercial page is its only home — and it's currently invisible to that search.

**Add this section to the Commercial page body (after the Commercial Services section):**

**H2:** `Excavation Services Spokane WA`

**Body copy:**

> Camco Construction provides professional excavation and site preparation services for residential and commercial projects across Spokane WA and Eastern Washington. From initial site clearing and grading through utility trenching, backfill, and drainage, our licensed crews bring the same accountability to excavation work as every other phase of construction.

**Services to list:**

- Residential and commercial site prep Spokane WA
- Grading and drainage solutions
- Utility trenching and backfill
- Excavation contractor Spokane WA for new construction
- Site clearing and haul-off
- Excavation company Spokane for foundation work

**Closing line:**

> Licensed excavation contractor serving Spokane, Spokane Valley, Coeur d'Alene, and surrounding Eastern Washington communities since 1976.

---

### 3. Homepage — Add LocalBusiness Schema Markup

**Current state:** No schema markup present in page source.

**Problem:** LocalBusiness schema is the #1 structural signal for Google's local map pack. Without it, Camco is competing for the map pack at a disadvantage against any competitor who has it implemented.

**Add to `<head>` of homepage:**

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Camco Construction Inc.",
    "url": "https://www.camcoconstruction.net",
    "telephone": "+1-509-536-1818",
    "email": "info@CamcoConstruction.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3105 E Boone Ave",
      "addressLocality": "Spokane",
      "addressRegion": "WA",
      "postalCode": "99202",
      "addressCountry": "US"
    },
    "areaServed": [
      "Spokane WA",
      "Spokane Valley WA",
      "Liberty Lake WA",
      "Cheney WA",
      "Mead WA",
      "Nine Mile Falls WA",
      "Five Mile Prairie WA",
      "Post Falls ID",
      "Coeur d'Alene ID"
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "foundingDate": "1976",
    "licenseNumber": "CAMCOCI799L5",
    "description": "Licensed general contractor in Spokane WA since 1976. Residential and commercial construction, excavation, tenant improvements, and wheelchair ramp installation. Fully licensed, bonded, and insured in Washington and Idaho.",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Washington State Contractor License",
      "credentialCategory": "license",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Washington State Department of Labor & Industries"
      }
    },
    "sameAs": [
      "https://www.facebook.com/camcoconstruction",
      "https://www.linkedin.com/company/camco-construction"
    ]
  }
</script>
```

**Also add Review schema** (after schema above, same `<head>` block or separate `<script>` tag):

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Camco Construction Inc.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Doc Tom" },
        "reviewBody": "Mr. Campbell has INTEGRITY that cannot be equalled. Honest, straight-forward and highly reliable.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Hank Shaw" },
        "reviewBody": "Great company to do work with. All crew members and office staff always very helpful.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  }
</script>
```

---

### 4. All Pages — Update Footer Navigation to Match New Site Structure

**Current footer nav (reflects old site):**

- General Contracting
- Residential Contracting
- Commercial Contracting
- Wheelchair Ramps

**Recommended footer nav (matches new architecture):**

**Services column:**

- Residential Services
- Home Additions
- Deck Construction
- Commercial & Excavation
- Accessibility & Ramps
- For Realtors & Property Managers

**Company column:**

- About Camco
- Projects
- Join Our Team

**Contact column:**

- 3105 E Boone Ave, Spokane WA 99202
- (509) 536-1818
- info@CamcoConstruction.net
- Lic. #CAMCOCI799L5
- Licensed in WA & ID

---

## HIGH PRIORITY — Implement Within First 30 Days

### 5. All Pages — Google Analytics 4 Base Tag

**Measurement ID: `G-1R87642CKG`**

Add the following two script blocks to the `<head>` of **every page on the site** — homepage, residential, commercial, accessibility, about, projects, and every future page added.

```html
<!-- Google tag (gtag.js) — Camco Construction G-1R87642CKG -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-1R87642CKG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1R87642CKG', {
    'page_title': document.title,
    'page_location': window.location.href,
    'send_page_view': true
  });
</script> -->
```

**Placement:** Paste immediately after the opening `<head>` tag, before any other scripts. This ensures pageview tracking fires on every page load.

**Verify it's working:** After adding to all pages, go to GA4 > Reports > Realtime and open the website in a browser. You should see 1 active user appear within 30 seconds.

---

### 6. All Pages — Phone Click Tracking (Most Important Lead Event)

Every phone number on the site must be a tappable `tel:` link with GA4 event tracking. This is the #1 conversion event for a contractor — without it, you cannot measure which pages are generating calls.

**HTML for every phone number instance:**

```html
<a
  href="tel:+15095361818"
  onclick="gtag('event', 'generate_lead', {
  'event_category': 'contact',
  'event_label': 'phone_click',
  'page_title': document.title,
  'page_location': window.location.href
});"
  >509-536-1818</a
>
```

**Pages where this must be applied:**

- Homepage (hero CTA, closing CTA, footer)
- Residential page (closing CTA, footer)
- Commercial page (closing CTA, footer)
- Accessibility & Ramps page (closing CTA, footer)
- Home Additions page (closing CTA, footer)
- Deck Construction page (closing CTA, footer)
- About & Contact page (contact section, footer)
- Every future page added to the site

---

### 7. All Pages — Email Click Tracking

Every `mailto:` link must also fire a GA4 lead event.

**HTML for every email link instance:**

```html
<a
  href="mailto:info@CamcoConstruction.net"
  onclick="gtag('event', 'generate_lead', {
  'event_category': 'contact',
  'event_label': 'email_click',
  'page_title': document.title,
  'page_location': window.location.href
});"
  >info@CamcoConstruction.net</a
>
```

---

### 8. Contact Form — Form Submission Tracking

When the contact form on the About & Contact page is submitted, fire this event. Implement on the form's submit handler or on the thank-you state:

```javascript
gtag("event", "form_submit", {
  event_category: "contact",
  event_label: "contact_form",
  page_title: document.title,
  page_location: window.location.href,
});

// Also fire generate_lead so it appears in the Leads report
gtag("event", "generate_lead", {
  event_category: "contact",
  event_label: "form_submit",
  page_title: document.title,
  page_location: window.location.href,
});
```

---

### 9. All Pages — CTA Button Click Tracking

Every "Request a Free Estimate" button should fire a click event so you can see which page CTAs are performing:

```html
<a
  href="/about/#contact"
  onclick="gtag('event', 'click', {
  'event_category': 'cta',
  'event_label': 'free_estimate_button',
  'page_title': document.title,
  'page_location': window.location.href
});"
  >Request a Free Estimate</a
>
```

---

### 10. GA4 — Custom Dimensions Setup

Set up the following in GA4 Admin > Property > Custom Definitions > Custom Dimensions. These allow you to filter and segment lead data by service type.

| Dimension Name   | Scope | Parameter Name   | Description                                                           |
| ---------------- | ----- | ---------------- | --------------------------------------------------------------------- |
| Service Category | Event | service_category | Residential / Commercial / Excavation / Decks / Ramps / Accessibility |
| Lead Source Page | Event | lead_source_page | URL of the page that generated the lead                               |
| Contact Method   | Event | contact_method   | phone / email / form                                                  |

**Once created, update the generate_lead events to include service_category where relevant:**

```javascript
// Example on the Deck Construction page phone link
gtag("event", "generate_lead", {
  event_category: "contact",
  event_label: "phone_click",
  service_category: "deck_construction",
  lead_source_page: window.location.href,
});
```

Use these service_category values consistently across all pages:

| Page                    | service_category value |
| ----------------------- | ---------------------- |
| Homepage                | general                |
| Residential             | residential            |
| Home Additions          | home_additions         |
| Deck Construction       | deck_construction      |
| Commercial & Excavation | commercial             |
| Accessibility & Ramps   | accessibility          |
| About & Contact         | contact                |

---

### 11. All Pages — Image Alt Text Audit

Every image on the site needs descriptive alt text that includes a service keyword and location. Current site images have either no alt text or generic filenames as alt text.

**Pattern:**

```html
<img
  src="home-addition-spokane.jpg"
  alt="Home addition project completed by Camco Construction in Spokane WA"
/>
```

**Required for all project images on the Projects page:**

- Include project type + "Spokane WA" + "Camco Construction"
- Example: `alt="Magnolia Remodel - residential home renovation in Spokane WA by Camco Construction"`

---

### 12. Submit XML Sitemap to Google Search Console

Once the new site is live, immediately submit a sitemap. Recommended sitemap structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.camcoconstruction.net/</loc><priority>1.0</priority></url>
  <url><loc>https://www.camcoconstruction.net/residential/</loc><priority>0.9</priority></url>
  <url><loc>https://www.camcoconstruction.net/commercial/</loc><priority>0.9</priority></url>
  <url><loc>https://www.camcoconstruction.net/accessibility-ramps/</loc><priority>0.8</priority></url>
  <url><loc>https://www.camcoconstruction.net/projects/</loc><priority>0.7</priority></url>
  <url><loc>https://www.camcoconstruction.net/about/</loc><priority>0.6</priority></url>
</urlset>
```

Update sitemap each time a new page goes live (Home Additions, Deck Construction, etc.).

---

### 13. Google Search Console — Link to GA4

In GA4 Admin > Property Settings > Search Console Links, connect the verified Search Console property. This surfaces the keyword query data inside GA4 and is essential for measuring which keywords are driving traffic to which pages.

---

## IMPROVEMENTS — Implement Within 60 Days

### 11. Residential Page — Add FAQ Section for Long-Tail Keywords

Long-tail keywords convert at higher rates but are hard to fit naturally into service copy. A FAQ section at the bottom of the residential page is the correct place for them.

**Recommended FAQ entries (H3 questions, 2–3 sentence answers):**

- _Do you handle permits for home additions in Spokane WA?_
- _How long does a home addition take in Spokane?_
- _What is the difference between a structural remodel and a cosmetic remodel?_
- _Do you build decks in Spokane Valley and surrounding areas?_
- _Are you licensed to work in Coeur d'Alene and North Idaho?_

Each answer should include the relevant long-tail keyword naturally in the response copy.

---

### 12. Commercial Page — Add FAQ Section

Same approach for commercial long-tail keywords:

- _Do you work with property managers in Spokane WA?_
- _Can you work in occupied commercial spaces?_
- _What is included in a tenant improvement scope?_
- _Are you a prevailing wage contractor in Washington State?_
- _Do you serve Spokane Valley commercial properties?_

---

### 13. Google Business Profile — Update Categories and Photos

**Required category changes:**

- Primary: General Contractor (confirm this is set)
- Add secondary: Home Builder, Excavating Contractor, Deck Builder, Remodeling Contractor

**Photo requirements (minimum 15–20 photos):**

- File names must include keywords: `camco-construction-home-addition-spokane-wa.jpg`
- Include geotag metadata where possible
- Photo categories: exterior shots, interior remodels, deck projects, excavation work, team/crew

---

## ONGOING — Monthly Actions

### 14. Monthly Blog Post Targeting Long-Tail Keywords

One post per month. Each post should target one long-tail keyword from Tier 3.

**First 6 months content calendar:**

| Month   | Title                                                                    | Primary Keyword                        |
| ------- | ------------------------------------------------------------------------ | -------------------------------------- |
| Month 1 | How Much Does a Home Addition Cost in Spokane WA?                        | home addition cost Spokane WA          |
| Month 2 | Deck Replacement vs. Deck Repair: What Spokane Homeowners Should Know    | deck replacement Spokane WA            |
| Month 3 | What to Look for in a Licensed Contractor in Spokane WA                  | licensed contractor Spokane WA         |
| Month 4 | Kitchen Remodel Timeline: What to Expect From Start to Finish in Spokane | kitchen remodel Spokane WA             |
| Month 5 | ADA Ramp Requirements for Spokane WA Homeowners and Businesses           | ADA ramp contractor Spokane WA         |
| Month 6 | How Property Managers in Spokane Find Reliable Contractors               | property manager contractor Spokane WA |

---

### 15. Google Reviews — Target 25+ Reviews

Reviews are the #1 factor in Google's local map pack ranking algorithm. Current review count is insufficient to compete against established contractors.

**Action steps:**

- Send a follow-up email to every completed project client requesting a Google review
- Add a "Leave us a review" link to the email signature
- Respond to every review within 48 hours — include a keyword naturally in each response (e.g., "Thank you for trusting Camco Construction with your home addition in Spokane WA")

---

_Document prepared for Camco Construction Inc. · Leif Challender, President · 509-536-1818 · info@CamcoConstruction.net_  
_Lic. #CAMCOCI799L5 · Licensed in WA & ID · www.CamcoConstruction.net_
