# zuhaildaley.com — Version 2

Static bilingual (English / Español) portfolio site for Zuhail Daley, navy-and-gold design. Plain HTML, CSS and one JavaScript file. No build step and no tracking. Hosted free on GitHub Pages.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Page content (English is the default and works without JavaScript) |
| `script.js` | English/Español toggle (Spanish text lives at the top of this file), mobile menu, animations, résumé link check, copy-email button |
| `styles.css` | Design. Colors and fonts are defined at the top under `:root` |
| `assets/favicon.svg` | Browser tab icon |
| `resumes/` | Four public-safe résumé PDFs |
| `CNAME` | Custom domain: `zuhaildaley.com` (do not delete) |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

Fonts (Cormorant Garamond and Inter) load from Google Fonts. If they are unavailable, the site falls back to built-in system fonts.

## Adding the photo later

Upload a vertical portrait (about 1200×1500 px, under 400 KB) as `assets/zuhail-daley.jpg`. It replaces the "ZD" placeholder automatically.

## Editing text

Change the English in `index.html`, then the matching line (same key) in the Spanish list at the top of `script.js`.
