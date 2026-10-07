# 📈 Millions Rise — Wealth & Investment Solutions Platform

> **A production-style full-stack financial platform built with the MERN stack, designed to deliver market insights, investment information, financial tools, and client-focused wealth solutions through a modern and responsive web experience.**

<p align="center">
  <a href="https://millions-rise-2qzwv88dh-lucky-goles-projects.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Live%20Website-Millions%20Rise-success?style=for-the-badge" alt="Live Website"/>
  </a>
  <a href="https://github.com/luckygole/Millions-rise">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
</p>

---

## 🌐 Live Project

**Live Website:**
https://millions-rise-2qzwv88dh-lucky-goles-projects.vercel.app/

**Source Code:**
https://github.com/luckygole/Millions-rise

---

## 🧾 About The Project

**Millions Rise** is a full-stack wealth and investment solutions platform developed as a **freelance/client project**.

The platform combines a modern React-based frontend with a Node.js and Express backend to provide users with financial information, market-focused content, IPO updates, calculators, authentication, lead management, and an administrative content-management system.

The project was designed with a strong focus on:

* Modern UI/UX
* Responsive design
* Secure authentication
* Full-stack architecture
* API-driven communication
* Admin-controlled content
* Scalable backend structure
* Production deployment

---

## ✨ Key Features

### 📊 Market & Financial Information

* Market information ticker
* Financial calculators
* Investment-focused content
* IPO information
* Financial comparison and informational sections
* Responsive financial dashboard-style components

### 🔐 Authentication System

* User registration
* User login
* Secure password hashing with bcrypt
* Session/authentication handling
* User logout
* Role-based access control
* Protected admin routes

### 🛡️ Admin Dashboard

The platform includes a dedicated administrative system for managing website content and users.

Admin capabilities include:

* User management
* Lead management
* IPO management
* Blog/content management
* Administrative controls
* Role-based authorization

Only users with the appropriate admin role can access protected administrative functionality.

### 📝 Lead & Content Management

* Client lead collection
* Backend lead APIs
* Content management
* Blog/post management
* IPO data management
* MongoDB-based data storage

### 🧮 Financial Tools

The platform includes interactive financial calculator components designed to make financial information easier for users to understand and explore.

### 📱 Responsive UI

Built to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🏗️ Tech Stack

### Frontend

* ⚛️ React.js
* ⚡ Vite
* 🎨 Tailwind CSS
* React Router
* JavaScript (ES6+)
* Responsive UI components

### Backend

* 🟢 Node.js
* 🚂 Express.js
* REST APIs
* JWT-based authentication
* bcrypt password hashing
* Middleware-based authorization

### Database

* 🍃 MongoDB
* MongoDB Atlas

### Deployment

* ▲ Vercel — Frontend
* 🚀 Render — Backend/API
* ☁️ MongoDB Atlas — Database

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* npm

---

## 📂 Project Structure

```text
Millions-rise/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ApplyModal.jsx
│       │   ├── AuthForm.jsx
│       │   ├── CalcShowcase.jsx
│       │   ├── CalcWidget.jsx
│       │   ├── CtaBand.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── IpoList.jsx
│       │   ├── ServiceGrid.jsx
│       │   ├── StatsCounter.jsx
│       │   └── Ticker.jsx
│       │
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── SettingsContext.jsx
│       │
│       ├── lib/
│       │   ├── api.js
│       │   ├── calculators.js
│       │   └── data.js
│       │
│       ├── pages/
│       │   ├── About.jsx
│       │   ├── Admin.jsx
│       │   ├── Contact.jsx
│       │   ├── Home.jsx
│       │   └── Ipo.jsx
│       │
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   ├── admin.js
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Ipo.js
│   │   ├── Lead.js
│   │   ├── Post.js
│   │   ├── Setting.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── content.js
│   │   ├── funds.js
│   │   ├── leads.js
│   │   ├── setting.js
│   │   └── users.js
│   │
│   ├── scripts/
│   │   └── makeAdmin.js
│   │
│   ├── utils/
│   │   └── wrap.js
│   │
│   └── server.js
│
├── HeroSlider.jsx
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 Application Architecture

```text
                 ┌─────────────────────┐
                 │    Millions Rise    │
                 │     React + Vite    │
                 └──────────┬──────────┘
                            │
                            │ REST API
                            ▼
                 ┌─────────────────────┐
                 │   Node.js + Express │
                 │      Backend API    │
                 └──────────┬──────────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        ┌─────────┐   ┌──────────┐   ┌──────────┐
        │ MongoDB │   │   Auth   │   │  Admin   │
        │  Atlas  │   │   System │   │  System  │
        └─────────┘   └──────────┘   └──────────┘
```

---

## 🔑 Authentication & Authorization

The application implements role-based access control.

### User Flow

```text
Sign Up
   ↓
User stored in MongoDB
   ↓
Password hashed with bcrypt
   ↓
Login
   ↓
Authentication
   ↓
User Dashboard / Website
```

### Admin Flow

```text
Authenticated User
       ↓
Role Verification
       ↓
Admin Role?
   ↙       ↘
 Yes        No
  ↓          ↓
Admin      Access
Panel      Denied
```

Protected API routes also validate authorization on the backend.

---

## 🗄️ Database Models

The backend uses MongoDB collections/models for core application data, including:

* Users
* Leads
* IPOs
* Posts
* Settings

This structure allows the platform to manage dynamic website content without hardcoding everything into the frontend.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/luckygole/Millions-rise.git
cd Millions-rise
```

### 2. Install dependencies

```bash
npm run install:all
```

### 3. Configure environment variables

Create the required environment files based on the provided examples.

```text
server/.env
```

Add your MongoDB connection and authentication-related configuration.

> Never commit `.env` files or private API keys to GitHub.

### 4. Start the backend

```bash
npm run dev:server
```

### 5. Start the frontend

```bash
npm run dev:client
```

The development frontend runs on the Vite development server.

---

## 📦 Production Build

Build the frontend:

```bash
npm run build
```

Start the production application:

```bash
npm start
```

The Express server can serve the production frontend build.

---

## ☁️ Deployment

The project is deployed using a modern cloud deployment workflow:

```text
GitHub
   │
   ├── Client → Vercel
   │
   └── Server → Render
                    │
                    ▼
               MongoDB Atlas
```

Every major code update can be pushed through GitHub and deployed through the connected cloud services.

---

## 🔒 Security Considerations

The application follows several security practices:

* Password hashing with bcrypt
* Protected authentication routes
* Role-based admin authorization
* Backend authorization checks
* Environment variables for secrets
* `.env` excluded from Git tracking
* Protected administrative APIs

> Financial data and market information should always be verified against appropriate authoritative sources before being used for investment decisions.

---

## 💼 Freelance Project Highlights

This project demonstrates practical experience in building and deploying a **real-world full-stack web application**, including:

* Client-oriented requirements implementation
* Complete frontend development
* REST API development
* MongoDB database integration
* Authentication and authorization
* Admin dashboard development
* Dynamic content management
* Responsive UI implementation
* Production deployment
* Git/GitHub workflow
* Frontend-backend integration

---

## 🎯 Why This Project Stands Out

Millions Rise goes beyond a simple static website.

It combines:

**Business Website + Financial Tools + Market Information + Authentication + Admin CMS + REST APIs + Database + Cloud Deployment**

This makes it a strong example of full-stack development and practical client-project experience.

---

## 📸 Project Preview

> Add screenshots/GIFs of the homepage, market ticker, calculator, IPO section, login/signup, and admin dashboard here for a stronger GitHub presentation.

Example:

```text
screenshots/
├── homepage.png
├── market-ticker.png
├── calculators.png
├── ipo.png
├── login.png
└── admin-dashboard.png
```

---

## 🧑‍💻 Developer

### Laksh Gole

**Full Stack Web Developer | MERN | React | Node.js**

I build modern, responsive and production-ready web applications with a focus on clean UI, scalable backend architecture and real-world business requirements.

### Tech Focus

`React.js` • `Node.js` • `Express.js` • `MongoDB` • `JavaScript` • `REST APIs` • `Tailwind CSS` • `Git` • `GitHub` • `Docker`

---

## 📬 Contact

**Email:** [golelaksh@gmail.com](mailto:golelaksh@gmail.com)

**GitHub:**
https://github.com/luckygole

**Project Repository:**
https://github.com/luckygole/Millions-rise

**Live Project:**
https://millions-rise-2qzwv88dh-lucky-goles-projects.vercel.app/

---

## ⭐ Support

If you find this project interesting, feel free to explore the repository and give it a ⭐.

---

## 📄 License

This project was developed as a freelance/client project.
Please contact the developer before reusing proprietary client-specific content, branding, assets, or business logic.
