# zuhaildaley.com

Static bilingual (English / Español) portfolio site for Zuhail Daley. Plain HTML, CSS and a small JavaScript file. No build step, no tracking, no third-party requests. Hosted free on GitHub Pages.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Page content (English is the default and works without JavaScript) |
| `script.js` | English/Español toggle, scroll animations, résumé link check |
| `styles.css` | Design |
| `assets/favicon.svg` | Browser tab icon |
| `resumes/` | Four public-safe résumé PDFs (no home address, personal phone or personal email) |
| `CNAME` | Custom domain: `zuhaildaley.com` |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

All links are relative, so the site works at https://zuhaildaley.com/.

### Adding the photo later

Upload a vertical portrait (about 1200×1500 px, under 400 KB) as `assets/zuhail-daley.jpg`. It replaces the "ZD" placeholder automatically; no code changes needed.

## Publish on GitHub Pages

1. Upload all files to the `main` branch of `mytl-on19s/zuha-website`, keeping the `assets/` and `resumes/` folders.
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. Same page → Custom domain: `zuhaildaley.com` → Save.

## GoDaddy DNS (done by the owner, not by Claude)

Do **not** change the MX, TXT (SPF/verification) or CNAME records that Microsoft 365 uses for email (`autodiscover`, `enterpriseregistration`, etc.).

- Remove the existing GoDaddy "Parked" or forwarding **A** record for `@`.
- Add four **A** records, Name `@`:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Add a **CNAME**, Name `www`, Value `mytl-on19s.github.io`

When DNS has updated (minutes to a few hours), return to Settings → Pages and tick **Enforce HTTPS**.

Recommended: GitHub account Settings → Pages → **Add a verified domain** → `zuhaildaley.com` (adds one TXT record) so nobody else can claim the domain on GitHub.
