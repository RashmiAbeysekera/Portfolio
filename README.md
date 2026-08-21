//# React + Vite

//This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

//Currently, two official plugins are available:

//- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
//- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

//## React Compiler

//The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

//Note: This will impact Vite dev & build performances.

//## Expanding the Oxlint configuration

//If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Rashmi Abeysekera — Portfolio

Personal software engineering portfolio built with React and Vite. Live at
**[portfolio-psi-wheat-25.vercel.app](https://portfolio-psi-wheat-25.vercel.app/)**.

## About

Information Technology undergraduate at the University of Moratuwa, building full-stack
applications and exploring the intersection of software engineering and artificial intelligence.
This site showcases selected projects, in-depth case studies, education, and beyond-classroom
activities.

## Case studies

- **[7°Skin](https://portfolio-psi-wheat-25.vercel.app/projects/7skin)** — Full-stack MERN PWA
  e-commerce platform.
- **[Healthcare Monitoring System](https://portfolio-psi-wheat-25.vercel.app/projects/healthcare-monitoring-system)**
- **[ResQAI](https://portfolio-psi-wheat-25.vercel.app/projects/resqai)** — AI-powered emergency
  response coordination platform (team project; case study covers my contribution to the SOS
  media/storage and live operator evidence feed).

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
  pages/          # full case-study pages (SevenSkin, HealthcareMonitoringSystem, ResQAI)
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