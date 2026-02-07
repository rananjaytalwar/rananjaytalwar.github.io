# Guidance for AI coding agents

This is a small static personal website served from this repository (GitHub Pages). Use these notes to be productive quickly.

- Purpose: simple static site for personal pages and short posts. No build system, frameworks, or package managers.
- Publish method: files are served directly (see `CNAME` present). Changes are published by pushing the repository to GitHub (the default Pages branch, e.g., `main` or `gh-pages`). Confirm branch in repository settings.

Key files and patterns
- Root HTML pages: `index.html`, `about.html`, `code.html`, `write.html` — each is standalone and references `style.css` and `script.js` where needed.
- Global styling: `style.css` controls layout and typography for all pages.
- Client JS: `script.js` runs on `DOMContentLoaded` and injects DOM elements (example: adds a random Pokémon image using an external raw GitHub URL). Avoid assuming bundlers or module systems.
- Posts and articles: `write/` contains individual HTML pages (`write/genetic.html`, `write/ip.html`). New posts are added as standalone HTML files in this folder.
- Assets: `assets/` holds images and other static resources; add files here and reference with relative paths.

Developer workflows (concrete)
- Local edit: edit the HTML/CSS/JS files directly in the repo. No build step required.
- Preview locally: open the edited HTML file in a browser (double-click or use a simple file server). Example (PowerShell):

```powershell
# from repo root
python -m http.server 8000
# then open http://localhost:8000 in a browser
```

- Publish: commit and push to the repository. Verify GitHub Pages branch in repo settings if the site doesn't update.

Project-specific conventions
- No templating: pages are duplicated rather than using includes; when updating site-wide content (navigation, fonts, meta tags), edit each HTML file or update while being careful to keep link structure consistent.
- Navigation: the main menu block in `index.html` is copied across pages — update links there when adding new pages.
- External resources: fonts are loaded from Google Fonts, and `script.js` references external image sources; review external URLs for reliability/security when changing.

Integration and external points
- `CNAME` indicates a custom domain configured for GitHub Pages—do not remove without coordination.
- `script.js` pulls images from the PokeAPI sprites repo (`raw.githubusercontent.com`). When modifying, consider caching or localizing assets to `assets/` to avoid runtime dependency on remote hosting.

Examples to reference when making edits
- Add a new post: create `write/my-post.html`, add a link from `index.html`/`write.html` navigation.
- Update site-wide style: modify `style.css` and then open pages locally to verify visually.
- Fix JS behavior: update `script.js` (it uses `document.addEventListener('DOMContentLoaded', ...)` and appends elements to `#home-page`).

Safety and testing
- There are no automated tests. Validate changes by opening pages in a browser and checking the console for JS errors.

When unsure or blocked
- Ask: which branch is used for Pages, and whether you may modify `CNAME`.
- If adding many pages, propose a lightweight templating approach (e.g., a small build script) before implementing.

If any of these notes are wrong or missing details (branch name, deployment steps), tell me and I will update this file.
