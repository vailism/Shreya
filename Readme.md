# KP Dev Cell — Official Web Portal

The official digital hub for the **Kammand Prompt Club (KP Dev Cell)** at **IIT Mandi**. This portal showcases the club's team, active projects, and upcoming events, featuring a robust administrative dashboard for real-time updates.

## 🚀 Technological Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React + Vite | Fast, modern UI with Tailwind CSS aesthetics. |
| **Backend** | FastAPI (Python) | High-performance asynchronous API. |
| **Database** | MongoDB | Document-based storage for flexible content schemas. |
| **Auth** | Firebase | Secure Google OAuth with backend token verification. |
| **DevOps** | Docker | Containerized services for uniform development. |
| **Reverse Proxy** | Nginx | Production-grade routing and static file serving. |

---

## ✨ Features

### 🌐 Public Experience
- **Dynamic Landing Page**: Real-time stats (members, projects, events) fetched directly from the database.
- **Team Showcase**: Visual directory of club members, roles, and professional links.
- **Project Portfolio**: Directory of active and archived projects with tech stack badges and GitHub links.
- **Event Timeline**: Discover upcoming workshops and browse through historical club sessions.

### 🔐 Administrative Control
- **Secure Authentication**: Google-powered login restricted to authorized administrators.
- **Node-side Verification**: Every admin request is validated server-side using the Firebase Admin SDK.
- **Content Management**:
  - **Team**: Add/remove members and update positions/bios.
  - **Projects**: Manage the club's portfolio with live/repository links.
  - **Events**: Curate and announce upcoming club activities.

---

## 🛠️ Infrastructure & Deployment

The project is architected as a set of interconnected Docker services:
- `frontend`: Vite-built React application.
- `backend`: FastAPI server implementing the REST API.
- `mongo`: Local database (Docker) or managed instance (Cloud).
- `nginx`: Single entry point handling reverse-proxying.

### 🌍 Cloud Hosting (Recommended)
This portal is designed to be hosted seamlessly on **Vercel** and **Render**:
1. **Frontend (Vercel)**: Point to the `frontend/` directory. Auto-detects Vite.
2. **Backend (Render)**: Deploy as a Web Service from the `backend/` directory.
3. **Database**: Use a managed MongoDB service (e.g., MongoDB Atlas).

---

## ⚙️ Environment Variables

Ensure the following variables are set in your deployment environment:

### Backend
- `MONGO_URI`: Connection string for MongoDB.
- `FIREBASE_CREDS_JSON`: (Production) Content of your `serviceAccountKey.json`.
- `FIREBASE_CREDS_PATH`: (Local) Path to your credentials file.

### Frontend (Vite)
- `VITE_API_BASE_URL`: The URL of your deployed backend.
- `VITE_FIREBASE_API_KEY`: Firebase web configuration.
- `VITE_FIREBASE_AUTH_DOMAIN`: ...and other Firebase config keys.

---

## 🤝 Contributors
Developed with ❤️ during a dedicated hackathon sprint:
- **Ritika** (EE 1st Year): Backend Architecture, MongoDB, Docker, Firebase Admin.
- **Shreya** (MnC 1st Year): Frontend UI/UX, Admin Dashboard, Responsive Layouts.

---

© 2024 Kammand Prompt Club, IIT Mandi.
