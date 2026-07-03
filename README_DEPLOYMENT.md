# Validora production static website

This is a production-ready static website directory for Validora.

## File structure

```text
validora_production_site_v1/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── CNAME.example
├── .nojekyll
├── README_DEPLOYMENT.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── favicon.svg
        ├── validora-logo.svg
        └── validora-og.svg
```

## Local preview

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create/open your GitHub repository.
2. Upload/push all files from this folder into the repository root.
3. Go to `Settings` → `Pages`.
4. Select `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save.

## Custom domain

1. Rename `CNAME.example` to `CNAME`.
2. Replace `your-domain.com` with your real domain.
3. In GitHub: `Settings` → `Pages` → `Custom domain`, add the same domain.
4. In your domain provider DNS, add the records requested by GitHub Pages.

For an apex/root domain, GitHub Pages commonly uses A/AAAA records. For a subdomain like `www`, it commonly uses a CNAME record pointing to your GitHub Pages address. Always follow the current GitHub Pages screen instructions.

## Before going live

Replace these placeholders:

- `YOUR-DOMAIN.com` in `robots.txt`
- `YOUR-DOMAIN.com` in `sitemap.xml`
- `your-domain.com` in `CNAME.example`
- `hello@validora.io` in `index.html` if your real email is different
- `assets/img/validora-logo.svg` with your real logo, if you want

## Notes

This is a static landing page. It does not include the Python validation engine or backend upload functionality yet.


## Logo files included

The custom Validora logo has been added under:

```text
assets/img/validora-logo.png
assets/img/validora-logo-original.png
assets/img/favicon.png
assets/img/apple-touch-icon.png
assets/img/validora-og.png
```

The website header already uses `assets/img/validora-logo.png`.
