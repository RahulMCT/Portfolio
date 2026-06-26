# Rahul Kumar — Portfolio

Modern, responsive portfolio website built with **React**, **Vite**, and **Framer Motion**, showcasing experience as a Java Full Stack Developer and HxGN EAM Technical Consultant.

**Live:** [https://rahulmct.github.io/Portfolio/](https://rahulmct.github.io/Portfolio/)

## Features

- Modern glassmorphism UI with gradient backgrounds and glow effects
- Dark / light mode toggle with smooth transitions
- Framer Motion scroll reveal animations per section
- Custom animated cursor (desktop) with ripple and magnetic buttons
- Scroll progress indicator
- EmailJS contact form + WhatsApp chat button
- Lazy-loaded sections for performance
- SEO: meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- Accessibility: ARIA labels, keyboard focus states, reduced motion support
- GitHub Actions deployment to GitHub Pages

## Tech Stack

- React 18 · Vite 6 · Framer Motion · EmailJS · React Icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number with country code (e.g. `919876543210`) |

### EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add **Gmail** as email service
3. Create a template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`
4. Copy Service ID, Template ID, and Public Key to `.env`
5. For GitHub Pages, add the same variables as **Repository Secrets** or use GitHub Actions env

## Build

```bash
npm run build
npm run preview
```

## Deployment

Push to the `main` branch — GitHub Actions builds and deploys automatically to GitHub Pages.

Ensure **Settings → Pages → Source** is set to **GitHub Actions**.

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/           # Portfolio content (portfolioData.js)
├── hooks/          # Custom hooks (theme, scroll, typing)
├── utils/          # Framer Motion animation variants
├── styles/         # Global CSS
├── App.jsx
└── main.jsx
public/
├── images/         # Profile photo, resume, assets
├── robots.txt
└── sitemap.xml
```

## Updating Content

Edit `src/data/portfolioData.js` to update personal info, skills, experience, projects, and other content.

## Experience Timeline

| Company | Role | Duration |
|---------|------|----------|
| MCT India Infotech Pvt Ltd | Software Developer (HxGN EAM / Java Full Stack) | May 2023 – Present |
| Technotask Business Solutions (Meesho) | L2 Support / Team Lead | Dec 2021 – Apr 2023 |
| Aegis (Starttek) | Customer Support Associate (L1) | Feb 2020 – Aug 2021 |
