# GitHub Pages Setup (Hindi + English)

Live site blank isliye aa raha hai kyunki GitHub abhi **purana source code** serve kar raha hai, **built site** nahi.

Built site ready hai `gh-pages` branch par. Aapko **sirf ek baar** ye karna hai:

## Step-by-step (2 minute)

1. Open: **https://github.com/RahulMCT/Portfolio/settings/pages**

2. **Build and deployment** section mein jao

3. **Source** dropdown se **"Deploy from a branch"** select karo

4. **Branch:** `gh-pages` | **Folder:** `/ (root)` | **Save** click karo

5. 2–3 minute wait karo, phir open karo: **https://rahulmct.github.io/Portfolio/**

6. Hard refresh: `Ctrl + Shift + R`

---

## Alternative (GitHub Actions)

Agar upar wala kaam na kare:

1. Same page par **Source** → **"GitHub Actions"** select karo
2. **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**
3. Green tick ke baad site check karo

---

## URLs

| URL | Expected |
|-----|----------|
| `https://rahulmct.github.io/Portfolio/` | Portfolio site (correct URL) |
| `https://rahulmct.github.io/` | 404 (normal for `Portfolio` repo name) |

Root URL (`rahulmct.github.io/` without `/Portfolio/`) ke liye alag repo chahiye: `RahulMCT.github.io`

---

## Local development

```bash
npm install
npm run dev
```

Production build test:

```bash
npm run build
npm run preview
```
