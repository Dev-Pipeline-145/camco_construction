#!/usr/bin/env bash
# Publish only the live website files for Cloudflare Pages.
# Draft pages, docs, templates, and the lander Google tag stay in git.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
rm -rf "$DIST"
mkdir -p "$DIST/assets"

PAGES=(
  index.html
  about.html
  residential.html
  home-additions.html
  deck-construction.html
  commercial.html
  contact-us.html
  projects.html
  join-our-team.html
  404.html
)

for page in "${PAGES[@]}"; do
  if [[ ! -f "$ROOT/$page" ]]; then
    echo "Missing live page: $page" >&2
    exit 1
  fi
  cp "$ROOT/$page" "$DIST/"
done

cp "$ROOT/_redirects" "$ROOT/robots.txt" "$ROOT/sitemap.xml" "$ROOT/_headers" "$DIST/"

if [[ -d "$ROOT/Assets" ]]; then
  SRC="$ROOT/Assets"
elif [[ -d "$ROOT/assets" ]]; then
  SRC="$ROOT/assets"
else
  echo "Missing Assets directory" >&2
  exit 1
fi

cp -R "$SRC/." "$DIST/assets/"
rm -f "$DIST/assets/js/google-tags.js"
find "$DIST" -name ".DS_Store" -delete

# Fail the build if unpublished or internal files leaked into the output.
LEAKS=(
  accessibility-ramps.html
  for-realtors.html
  AGENTS.md
  README.md
  assets/js/google-tags.js
)
for leak in "${LEAKS[@]}"; do
  if [[ -e "$DIST/$leak" ]]; then
    echo "Unpublished file leaked into dist: $leak" >&2
    exit 1
  fi
done

if [[ -d "$DIST/Page Context" || -d "$DIST/Template Pages" || -d "$DIST/Content For Pages" ]]; then
  echo "Internal folders leaked into dist" >&2
  exit 1
fi

if [[ ! -f "$DIST/assets/js/camco-tracking.js" ]]; then
  echo "Missing dist/assets/js/camco-tracking.js" >&2
  exit 1
fi

if grep -R -l "G-KXBZR9GFMJ\|GTM-P47697N4" "$DIST" >/dev/null 2>&1; then
  echo "Lander tracking IDs found in Pages output" >&2
  grep -R -n "G-KXBZR9GFMJ\|GTM-P47697N4" "$DIST" >&2 || true
  exit 1
fi

if grep -R -l "gtag/js" "$DIST"/*.html >/dev/null 2>&1; then
  echo "Hardcoded gtag loader found in published HTML" >&2
  exit 1
fi

echo "Cloudflare Pages output ready: $DIST"
