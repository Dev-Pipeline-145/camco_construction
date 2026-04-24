# Camco Google Ads Keyword Execution (Live Navbar vs Future Pages)

Updated: March 2026

This file separates keywords into:
- **Live now**: terms mapped to pages currently available in the navbar.
- **Future build**: terms held for pages not yet built/published.

Use this as the source of truth when updating Google Ads campaigns.

---

## 1) Live Navbar Pages (use now)

These are currently available from main navigation and safe to use as Final URLs.

### Home (`/`)
- general contractor Spokane WA
- general contractor Spokane
- construction company Spokane WA
- contractor Spokane WA
- licensed contractor Spokane WA

### About (`/about/`)
- about Camco Construction Spokane
- general contractor Spokane WA since 1976
- licensed bonded insured contractor Spokane

### Residential (`/residential/`)
- residential contractor Spokane WA
- home remodeling contractor Spokane WA
- home renovation contractors Spokane
- bathroom remodel contractor Spokane
- kitchen remodel Spokane WA
- kitchen renovation Spokane WA
- Spokane kitchen contractor
- walk-in shower installation Spokane

### Home Additions (`/home-additions/`)
- home addition contractor Spokane WA
- room addition Spokane WA
- master suite addition Spokane
- garage addition Spokane
- house addition Spokane Valley
- in-law suite contractor Spokane

### Deck Construction (`/deck-construction/`)
- deck construction Spokane WA
- deck replacement Spokane WA
- deck contractor Spokane
- deck builder Spokane WA
- multi-family deck replacement Spokane
- composite deck builder Spokane

### Commercial (`/commercial/`)
- commercial contractor Spokane WA
- commercial remodel Spokane WA
- tenant improvement contractor Spokane
- tenant improvement Spokane WA
- office renovation Spokane WA
- commercial building contractor Spokane
- office buildout contractor Spokane

### Projects (`/projects/`)
- construction projects Spokane WA
- contractor portfolio Spokane
- home remodeling projects Spokane WA
- commercial renovation projects Spokane

### Join Our Team (`/join-our-team/`)
- construction careers Spokane WA
- contractor jobs Spokane
- construction labor jobs Spokane WA
- carpentry jobs Spokane
- project manager construction jobs Spokane
- excavation crew jobs Spokane
- join construction team Spokane
- camco construction careers
- construction jobs Spokane Valley
- camco construction jobs

### Contact (`/contact-us/`)
- contact Camco Construction Spokane WA
- construction estimate Spokane WA
- request construction estimate Spokane WA

---

## 2) URL aliases to use for Ads compatibility

These URL patterns are supported and should resolve correctly:

- `/residential-contracting/` -> Residential page
- `/commercial-contracting/` -> Commercial page
- `/home-addition/` -> redirects to `/home-additions/`

If existing ads use these aliases, they can remain active.

---

## 3) Future Pages (hold keywords until page is live)

Do not scale these ad groups until corresponding landing pages are built.

### ADU page (target future URL: `/adu/`)
- ADU builder Spokane
- ADU contractor Spokane
- accessory dwelling unit Spokane
- detached ADU Spokane
- garage conversion ADU Spokane
- in-law suite addition Spokane WA
- ADU permit Spokane WA

### Accessibility page (target future URL: `/wheelchair-ramps/` or `/accessibility/`)
- wheelchair ramp installation Spokane WA
- ADA ramp contractor Spokane WA
- accessibility contractor Spokane WA
- wheelchair ramp consultation Spokane
- veteran accessibility contractor Spokane
- ADA home modification Spokane

### Realtor / Property Manager page (target future URL: `/for-realtors/`)
- realtor contractor Spokane WA
- property manager contractor Spokane WA
- pre-listing repairs Spokane
- investor contractor Spokane
- make-ready contractor Spokane
- between tenants contractor Spokane

### Excavation page (target future URL: `/excavation/`)
- excavation contractor Spokane WA
- excavation company Spokane
- excavation site prep Spokane WA
- grading contractor Spokane WA

### Structural Remodel page (target future URL: `/structural-remodel/`)
- structural remodel Spokane
- structural remodel contractor near me Spokane
- load bearing wall removal contractor Spokane

---

## 4) Campaign activation guidance

- **Activate now**: Residential, Commercial, ADU (point ADU to Residential until `/adu/` exists).
- **Keep paused**: Accessibility and Realtor/PM until dedicated pages are live.
- **Keep careers separate**: Run Join Our Team keywords in a dedicated careers ad group/campaign so hiring clicks do not mix with lead-generation traffic.
- **When each new page launches**:
  1. Update Final URLs for its ad group first.
  2. Unpause that campaign/ad group.
  3. Verify conversion events fire in GTM Preview + GA4 DebugView.

---

## 5) Task list: pages not live in navbar yet

Use this as the execution checklist for pages/campaigns that are not currently live in main navigation.

### Accessibility page backlog (`/wheelchair-ramps/` or `/accessibility/`)
- [ ] Build and publish dedicated page with primary H1: `Wheelchair Ramp Installation Spokane WA`.
- [ ] Add SEO title <=60 chars and meta description <=160 chars.
- [ ] Add internal links to `/contact-us/`, `/residential/`, and `/projects/`.
- [ ] Add image alt metadata containing service + location (Spokane WA).
- [ ] Update Google Ads Accessibility campaign Final URL from placeholder to the new live URL.
- [ ] Unpause `Search - Accessibility` after URL, GTM, and conversion checks pass.

### Realtor / Property Manager page backlog (`/for-realtors/`)
- [ ] Confirm page remains published and content is aligned to B2B property manager intent.
- [ ] Add/update H1 with primary keyword: `Contractor for Realtors & Property Managers Spokane WA`.
- [ ] Confirm trust signals are present: licensed, bonded, insured, since 1976.
- [ ] Set Google Ads Realtor-PM campaign Final URL to `/for-realtors/`.
- [ ] Unpause `Search - Realtor-PM` once conversion tracking validates.

### ADU page backlog (`/adu/`)
- [ ] Build and publish dedicated ADU landing page.
- [ ] Use primary H1: `ADU Builder Spokane WA`.
- [ ] Add supporting content: permits, detached/attached ADU, garage conversion.
- [ ] Add internal links to `/contact-us/`, `/residential/`, and `/home-additions/`.
- [ ] Move `Search - ADU` Final URLs from residential placeholder to `/adu/`.
- [ ] Keep ADU campaign active; update ad copy display path to match `/adu/` once live.

### Excavation page backlog (`/excavation/`)
- [ ] Build and publish excavation landing page (service scope, site prep, grading, utilities).
- [ ] Set SEO title/meta and image alt text standards.
- [ ] Draft new `Search - Excavation` ad group/campaign keyword set.
- [ ] Add Final URL mapping in Google Ads after publish.

### Structural remodel page backlog (`/structural-remodel/`)
- [ ] Build and publish structural remodel landing page.
- [ ] Include load-bearing wall and engineering/permit trust language.
- [ ] Add relevant Residential campaign ad group and keywords.
- [ ] Set Final URL and unpause only after conversion tracking test passes.

### Cross-page launch QA (required before any unpause)
- [ ] Page returns `200` at canonical URL (no placeholder or redirect loops).
- [ ] GTM container `GTM-WTN4CTH6` present in `<head>` and `<body>` noscript.
- [ ] GA4 `page_view` appears in DebugView for the new page.
- [ ] At least one lead event (`generate_lead` or `form_submit`) is recorded from that page.
- [ ] Ads Final URL set exactly to canonical destination.

---

## 6) Final URL assignment standard (navbar pages only)

Use these canonical destinations for all currently paused Search keywords that should run now:

| Intent cluster | Final URL (canonical navbar page) |
|---|---|
| Brand / general contractor | `https://camcoconstruction.net/` |
| Residential remodel keywords | `https://camcoconstruction.net/residential/` |
| Home addition keywords | `https://camcoconstruction.net/home-additions/` |
| Deck keywords | `https://camcoconstruction.net/deck-construction/` |
| Commercial / tenant improvement keywords | `https://camcoconstruction.net/commercial/` |

Notes:
- Use canonical navbar URLs above instead of legacy aliases where possible.
- Existing redirects for legacy paths still work, but keep ad URLs clean/canonical.
- New/future campaign groups (ADU, Accessibility, Realtor-PM, Excavation, Structural) remain in Section 5 until dedicated pages are finalized.

