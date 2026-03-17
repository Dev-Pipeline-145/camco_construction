# Camco Launch Checklist (Ads + Tracking + Forms)

Updated: March 2026

This checklist is the operational runbook for launch readiness and post-launch QA.

---

## A) Google Ads bulk URL file validation

Source file:
- `Google-Ads-Keyword-FinalURL-Bulk-Update.csv`

Validation results:
- Row count: **66**
- Columns present: `Action`, `Campaign`, `Ad group`, `Keyword`, `Match type`, `Final URL`
- Missing required columns: **None**
- Empty `Final URL` rows: **0**
- Campaign distribution:
  - `Search - Residential`: **40**
  - `Search - Commercial`: **26**
- Unique Final URLs used: **5**
  - `https://camcoconstruction.net/`
  - `https://camcoconstruction.net/residential/`
  - `https://camcoconstruction.net/home-additions/`
  - `https://camcoconstruction.net/deck-construction/`
  - `https://camcoconstruction.net/commercial/`
- Live URL health check: **all 5 return HTTP 200**

Status: **READY FOR IMPORT**

---

## B) Google Ads launch order

1. Import `Google-Ads-Keyword-FinalURL-Bulk-Update.csv` in Google Ads Editor.
2. Verify no policy or destination errors after posting changes.
3. Remove the 5 low-volume keywords flagged `rarely served`.
4. Keep campaign split:
   - Residential lead intent
   - Commercial lead intent
   - Careers intent (separate)
5. Keep future-page campaigns paused until destination pages are live:
   - Accessibility
   - Realtor/PM
   - Excavation
   - Structural Remodel

---

## C) GTM / GA4 tracking checks

Known IDs:
- GTM: `GTM-WTN4CTH6`
- GA4: `G-1R87642CKG`

Checklist:
- [ ] GTM container latest version published
- [ ] GA4 configuration tag fires on all pages
- [ ] `generate_lead` fires for `tel:` clicks
- [ ] `generate_lead` fires for `mailto:` clicks
- [ ] Form submit events fire (`form_submit` tags/events)
- [ ] GA4 DebugView shows expected events from live domain
- [ ] Google Ads conversion actions are mapped/imported where needed
- [ ] Auto-tagging (`gclid`) is enabled in Google Ads

---

## D) Forms reliability checks

Endpoints:
- FormSubmit AJAX recipient: `info@camcoconstruction.net`

Checklist:
- [ ] FormSubmit mailbox activation link clicked
- [ ] Contact form test delivered to inbox
- [ ] Join form test delivered to inbox
- [ ] User-facing form text is clean (no raw `\\n` artifacts)
- [ ] Turnstile challenge required before submit

---

## E) Footer/nav and URL consistency checks

Checklist:
- [ ] Footer services list matches live navbar service availability
- [ ] Legacy `camco-*` paths 301 to canonical URLs
- [ ] Ads final URLs use canonical live paths (not deprecated aliases)
- [ ] Public domain references use `camcoconstruction.net`

---

## F) Post-launch (first 7 days)

Daily:
- [ ] Impressions > 0 on active campaigns
- [ ] Clicks coming through to correct landing pages
- [ ] Leads appear in inbox and GA4 events
- [ ] Search terms report reviewed for negatives

Weekly:
- [ ] Pause poor-intent keywords
- [ ] Reallocate budget to ad groups with best conversion rate
- [ ] Update keyword/URL mapping doc as pages go live

