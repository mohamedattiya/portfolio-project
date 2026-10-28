# DevFolio — Full-Stack Developer Portfolio

A responsive developer portfolio built with React + Vite, Node.js + Express, and SQLite.

## Features
- Responsive dark portfolio design
- Hero section, skills, selected projects, process, and contact section
- Contact form with client/server validation
- Express REST API
- SQLite persistence for contact messages
- Rate limiting and basic security headers
- Seeded project data served from the backend
- GitHub-ready structure

## Requirements
- Node.js 20+ recommended
- npm

## 1. Install dependencies

Open a terminal in this folder:

```bash
npm install
npm run install:all
```

## 2. Start development servers

```bash
npm run dev
```

Frontend: http://localhost:5173  
Backend health check: http://localhost:4000/api/health

The Vite dev server proxies `/api` requests to Express.

## 3. Configure

Copy `server/.env.example` to `server/.env` if you want to customize the port or database path.

## 4. Customize before publishing
Search `client/src/App.jsx` and replace:
- `Mohamed Atya` if you want another display name
- The placeholder email and social links
- Project GitHub/demo links with real links
- Skills and descriptions with skills you can confidently discuss

Do not claim projects are deployed or production-ready until you have tested and published them.

## API
- `GET /api/health` — server health
- `GET /api/projects` — portfolio project list
- `POST /api/contact` — validates and stores a contact message

## Database
SQLite database is created automatically at `server/data/devfolio.sqlite`. The database folder is created on first run.

## Production notes
Before public deployment, set a real contact destination/workflow, use HTTPS, configure allowed origins, and add a privacy notice explaining how contact messages are stored. The included rate limiter is a basic starting point, not a complete anti-abuse system.
