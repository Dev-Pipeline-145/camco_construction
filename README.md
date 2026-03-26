# CAMCO Construction Website

Plain HTML, CSS, and JavaScript site for CAMCO Construction. Shared styles: `css/main.css`. Shared behavior: `js/main.js` and `js/gtm-init.js`.

## Why things looked “wrong” before

Early versions used **root-relative URLs** (`/css/...`) that break when you open a file from disk, or were **missing folders** (`about/`, `contact/`, `projects/`, `includes/`) that **AGENTS.md** describes. That made the repo **not match the documented layout** and was frustrating. Those gaps are **fixed below**; inner pages and `includes/` snippets are in place.

## Running locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/` — home  
- `http://localhost:8080/about/` — about  
- `http://localhost:8080/contact/` — contact (form; configure endpoint)  
- `http://localhost:8080/projects/` — projects  
- `http://localhost:8080/404.html` — error page template (map 404 in hosting)

You can also open `index.html` directly; asset paths are **relative** so CSS and images load from disk.

## Folder layout (aligned with AGENTS.md)

```text
/
├── index.html
├── 404.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── projects/
│   └── index.html
├── includes/              # copy/paste snippets (no build step yet)
│   ├── header-root.html
│   ├── header-subpage.html
│   ├── footer-root.html
│   ├── footer-subpage.html
│   └── README.txt
├── css/
│   └── main.css
├── js/
│   ├── main.js
│   └── gtm-init.js
├── Logo/                  # favicon, logo, apple-touch
├── Assets/                # legacy media paths (capital A; see note below)
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── README.md
└── AGENTS.md
```

**Note:** AGENTS.md shows `assets/` (lowercase). This repo keeps **`Assets/`** because existing images and URLs use that path. Renaming is optional; if you rename, update every `Assets/` reference in HTML/CSS.

## Includes (no SSG yet)

- **`includes/header-root.html`** / **`footer-root.html`** — paste into `index.html` and `404.html` when you change the chrome.  
- **`includes/header-subpage.html`** / **`footer-subpage.html`** — for `about/`, `contact/`, `projects/` (paths use `../`).  

Or add Eleventy/Jekyll later and turn these into real partials.

## Git workflow

This matches **[AGENTS.md](./AGENTS.md)** (`<initials>/<website-name>`). Use **letters, numbers, and hyphens** only—no spaces or apostrophes (they break shell quoting and some hosts).

From your default branch (usually `main`):

```bash
git checkout -b mk/camco-site
```

Replace `mk/camco-site` with your initials and a short site slug (example only).

Push and set upstream:

```bash
git push -u origin mk/camco-site
```

If you are already on a branch with a different name, rename it to match the convention:

```bash
git branch -m mk/camco-site
git push -u origin mk/camco-site
```

(If the old branch was already pushed, delete the remote old name in GitHub after pushing the new one, or ask your team how they manage renames.)

## Contact form

`contact/index.html` uses `data-contact-form` and `js/main.js`. Set **`action`** on the form to your real endpoint (Formspree, Netlify Forms, or API). The placeholder URL will fail until you replace it.

## Remaining work (checklist)

- [ ] Replace **`GTM-XXXXXXX`** with the real GTM container ID on every page that loads GTM.  
- [ ] **Contact form:** set `action` to a working endpoint; confirm JSON POST matches your provider (or adjust `main.js`).  
- [ ] **Production URLs:** align paths with live site if they differ (`contact/` vs `contact-us/`).  
- [ ] **404:** configure the host to serve `404.html` for unknown paths.  
- [ ] **Optional:** richer About/Projects content, associations, testimonials, phone in header (when approved).  
- [ ] **Optional:** `LocalBusiness` / `GeneralContractor` JSON-LD when NAP is approved.  
- [ ] **Optional:** font preload / `srcset` for hero images per AGENTS performance notes.  

## Docs

- **`AGENTS.md`** — HTML/CSS/JS rules for this repo.  
- Follow **AGENTS.md** Markdown guidance: prefer **README + AGENTS**; avoid duplicating rules across many files.
