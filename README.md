# Mohammed Aymen Benzine: Portfolio (React + Vite)

A personal portfolio site built with **React**, **Vite**, and **Tailwind CSS**.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final site.

## Deploy on Vercel

**Option 1: Vercel website (easiest)**
1. Go to [vercel.com](https://vercel.com) and log in (or create a free account).
2. Click **Add New → Project**.
3. Upload this folder, or push it to GitHub first and import the repo.
4. Vercel will detect it's a Vite project automatically.
5. Click **Deploy**. Done, you get a live link in about a minute.

**Option 2: Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel will build and deploy automatically.

## Project structure

```
src/
  components/      → all UI sections (Hero, About, Projects, etc.)
  data/content.js  → all text content (edit this file to update info)
  assets/          → profile photo
  hooks/           → scroll-reveal animation hook
index.html         → page title, meta tags, SEO
```

## Editing content

All text (name, jobs, projects, skills) is in **`src/data/content.js`**.
Edit that one file to update anything on the site without touching the design.

To change the profile photo, replace `src/assets/profile.jpg` with a new image (keep the same file name, or update the import in `Hero.jsx` and `About.jsx`).
