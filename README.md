# Rashmi Abeysekera — Portfolio

Personal software engineering portfolio built with React and Vite. Live at

## About

Information Technology undergraduate at the University of Moratuwa, building full-stack
applications and exploring the intersection of software engineering and artificial intelligence.
This site showcases selected projects, in-depth case studies, education, and beyond-classroom
activities.

## Case studies

- **[RepoPilot](https://portfolio-psi-wheat-25.vercel.app/projects/repopilot)** — AI-powered repository
  intelligence assistant with end-to-end RAG, pgvector semantic search, grounded Gemini responses,
  controlled agentic code investigation, and event-driven GitHub synchronization.
- **[Cloud Storage Solution (CEYNOA)](https://portfolio-psi-wheat-25.vercel.app/projects/cloud-storage-solution)** — Secure
  admin management cockpit and analytics module with Django REST Framework, JWT auth, fine-grained RBAC,
  and multi-dimensional visual storage analytics (developed in collaboration with ServerSalad).
- **[7°Skin](https://portfolio-psi-wheat-25.vercel.app/projects/7skin)** — Full-stack MERN PWA
  e-commerce platform.
- **[ResQAI](https://portfolio-psi-wheat-25.vercel.app/projects/resqai)** — AI-powered emergency
  response coordination platform (team project; case study covers my contribution to the SOS
  media/storage and live operator evidence feed).
- **[SheRest](https://portfolio-psi-wheat-25.vercel.app/projects/sherest)** — A safe haven for every woman;
  ongoing digital sanctuary ideathon proposal (Team Nexio, Artemia 1.0).
- **[Healthcare Monitoring System](https://portfolio-psi-wheat-25.vercel.app/projects/healthcare-monitoring-system)**

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animation
- [Oxlint](https://oxc.rs/) for linting

## Getting started

```bash
npm install
npm run dev       # start the local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint       # run Oxlint
```

## Project structure

```
src/
  app/            # root App component and routing (path-based)
  assets/         # images used across projects and case studies
  components/     # shared layout, activity, and UI components
  data/           # project, profile, education, and activity data
  pages/          # full case-study pages (RepoPilot, SevenSkin, HealthcareMonitoringSystem, ResQAI, SheRest)
  sections/       # homepage sections (Hero, Projects, About, Contact, etc.)
  styles/         # design tokens
  index.css       # global styles and design system
```

## Routing & deployment

This is a single-page app using plain `window.location.pathname` checks (no router library).
Because Vercel serves static builds, `vercel.json` includes a rewrite so that client-side routes
(like `/projects/resqai`) resolve correctly on direct navigation, page refresh, or when opened in
a new tab, instead of returning a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## License

Personal project — all rights reserved.
