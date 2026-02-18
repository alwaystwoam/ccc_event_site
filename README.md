# Cypress Code Camp — Event Site

A mobile-first, cyberpunk-themed event site for Cypress Code Camp.  
Static HTML/CSS/JS — no build step, no backend.

## Quick Start (Local)

Open `index.html` in any browser. That's it.

## Deploy on GitHub Pages

1. **Create a new GitHub repository**  
   Go to [github.com/new](https://github.com/new) and create a repo (public or private).

2. **Push files to the repo**
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial commit — Cypress Code Camp site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**  
   - Go to your repo → **Settings** → **Pages**  
   - Under "Source", select **Deploy from a branch**  
   - Branch: `main` / folder: `/ (root)`  
   - Click **Save**

4. **Access your site**  
   After a minute or two, your site will be live at:  
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Customizing

### Placeholders

Edit the `CONFIG` object at the top of `script.js`:

```js
const CONFIG = {
  date: '[DATE TBD]',
  location: '[CITY / VENUE TBD]',
  registrationUrl: '#',
  contactUrl: '#',
};
```

Replace the placeholder values with your real event details and registration URL.

### Colors

All colors are defined as CSS variables in `styles.css` under `:root`. Adjust the `--neon-*` values to change the accent palette.

### Fonts

Fonts are loaded from Google Fonts in `index.html`. Swap the `<link>` tag and `--font-display` / `--font-body` variables to use different typefaces.

## File Structure

```
index.html   — Single-page site (all sections)
styles.css   — Full theme, layout, responsive styles
script.js    — Smooth scroll, accordions, copy buttons
README.md    — This file
```

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). No IE support.

## License

This site was built for Cypress Code Camp. Use and modify as you see fit.
