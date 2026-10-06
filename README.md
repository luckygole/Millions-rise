# Millions Rise – MERN (MongoDB, Express, React+Vite, Node) + Tailwind CSS

```
millions-rise-mern/
├─ package.json            root scripts
├─ server/                 Express API
│  ├─ server.js · .env.example · package.json
│  ├─ config/db.js
│  ├─ models/    Lead.js Ipo.js Post.js
│  ├─ middleware/auth.js   utils/wrap.js
│  └─ routes/    auth.js leads.js content.js funds.js
└─ client/                 React + Tailwind
   ├─ index.html · vite.config.js · tailwind.config.js · postcss.config.js
   └─ src/ main.jsx App.jsx index.css config.js
      ├─ lib/        api.js data.js calculators.js
      ├─ components/ Ticker Header Footer CtaBand Head CalcWidget ServiceGrid ApplyModal
      └─ pages/      Home About Services Ipo Calculators Compare Risk Blogs Faq Contact Disclaimer Admin
```
## Run (development)
1. `npm run install:all`
2. `cp server/.env.example server/.env` and fill values (MongoDB must be running / Atlas URI)
3. Terminal 1: `npm run dev:server` · Terminal 2: `npm run dev:client` → http://localhost:5173
## Production
`npm run build` then `npm start` → http://localhost:5000 (Express serves client/dist). Admin: `/admin`.
## Before going live
Edit `client/src/config.js` (ARN, WhatsApp, Client Login and Motilal Oswal links). Use HTTPS. Check mfapi.in terms for commercial use. IPO/GMP data is entered from /admin.

## Accounts, Login & Admin (new)
- `/signup` creates a user in MongoDB (`users` collection) with password hashed (bcrypt) and **role: "user"**.
- `/login` signs in. The navbar shows Login / Sign Up, and after login shows the user name + **Logout**.
- **Admin access:** open the `users` collection in MongoDB (Compass/Atlas), find the user and change `role` from `"user"` to `"admin"`.
  Or run: `cd server && npm run make-admin -- user@email.com`.
- Only users with role `admin` see the **Admin Panel** button and can open `/admin` (leads, users, IPOs, blog posts). The API enforces this too (403 for others).
- Admins are redirected to `/admin` right after login. Role changes apply on the user's next page load/login.
- New files: server/models/User.js, middleware/admin.js, routes/users.js, scripts/makeAdmin.js · client/src/context/AuthContext.jsx, components/AuthForm.jsx, RequireAdmin.jsx, pages/Login.jsx, Signup.jsx.
- ADMIN_EMAIL / ADMIN_PASSWORD in .env are no longer used.
