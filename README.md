💬 Real-Time ChatApp

A full-stack real-time chat application with direct messaging, group chats, image sharing, and JWT-based authentication. Built with React (Vite) on the frontend and Node.js/Express, MongoDB, and Socket.IO on the backend.

🚀 Features

🔐 Authentication — Register/Login with JWT stored in httpOnly cookies.

⚡ Real-time messaging — Instant updates with Socket.IO.

👥 Direct & Group chats — Create groups, list groups, and chat away.

🖼️ Image upload — Integrated with Cloudinary for sending pictures.

🎨 Modern UI — React 18 + TailwindCSS + DaisyUI, React Router, Zustand.

🏭 Production ready — Backend serves the built frontend in production mode.

🛠 Tech Stack

Frontend

React 18, Vite, TailwindCSS, DaisyUI, Axios, Zustand, React Router

Backend

Node.js, Express, Mongoose, Socket.IO, JWT, Cookie Parser, Cloudinary

Database

MongoDB (Atlas or local instance)
⚡ Quick Start
1️⃣ Install prerequisites

Node.js 18+

MongoDB (Atlas or local)

Cloudinary account (for image uploads)

2️⃣ Configure environment

Create backend/.env:

MONGODB_URI=<your-mongodb-uri>
PORT=5001
JWT_SECRET=<secure-random-string>
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
NODE_ENV=development

3️⃣ Install dependencies
npm install --prefix backend
npm install --prefix frontend

4️⃣ Run in development

# Terminal A - backend

npm run dev --prefix backend

# Terminal B - frontend (Vite runs at http://localhost:5173)

npm run dev --prefix frontend

5️⃣ Build & run in production
npm run build # builds frontend
npm run start # serves frontend from backend

🧩 Core Workflow

Auth → User logs in → server issues JWT in httpOnly cookie → protected routes check req.user.

Messaging → Client sends messages via REST; real-time updates come from Socket.IO.

Groups → Server returns groups user is part of; fetch group messages by groupId.

Images → Frontend sends base64 → backend uploads to Cloudinary → message stores secure_url.

🔗 API Overview

POST /api/auth/\* → Auth (login/register/logout)

GET /api/messages/:userId → Fetch direct messages

POST /api/messages/:userId → Send direct message

GET /api/groups → Fetch groups for sidebar

POST /api/groups → Create/manage groups

GET /api/groupmessages/:id → Group messages by groupId

POST /api/groupmessages/:id → Send group message (text/image)

📜 Scripts

Root

npm run build → Install deps + build frontend

npm run start → Start backend & serve frontend

Backend

npm run dev → Start Express with Nodemon

npm run start → Start Express server

Frontend

npm run dev → Vite dev server

npm run build → Build React app

npm run preview → Preview production build
