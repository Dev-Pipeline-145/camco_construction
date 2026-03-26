CAMCO static HTML — shared snippets (AGENTS.md: partials or copy into each page)

This folder is not loaded automatically by the browser. When you change the header or footer:

1. Edit header-root.html / footer-root.html for pages at the site root (index.html, 404.html).
2. Edit header-subpage.html / footer-subpage.html for inner pages (about/, contact/, projects/).
3. Paste the updated markup into each built HTML file, or add a static-site generator later.

Inner pages use "../" so css/, js/, and Logo/ resolve from subfolders.
