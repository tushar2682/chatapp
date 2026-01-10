# Talent-IQ: Video Interview Platform

Talent-IQ is a modern, full-stack video interviewing platform built to streamline the technical interview process. It combines real-time video calls, collaborative code execution, and interview management into a seamless experience.

![Project Banner](https://images.unsplash.com/photo-1565514020176-6c2235c8d37c?q=80&w=2600&auto=format&fit=crop)

## 🚀 Features

- **Real-time Video Calls**: High-quality video and audio conferencing powered by [GetStream.io](https://getstream.io/).
- **Collaborative Code Editor**: Live coding environment supporting multiple languages (JavaScript, Python, Java) using [Piston API](https://piston.readthedocs.io/).
- **Authentication**: Secure user authentication and management via [Clerk](https://clerk.com/).
- **Interview Sessions**: Create, schedule, and manage interview sessions.
- **Modern UI**: Sleek, responsive design built with React, Tailwind CSS, and DaisyUI.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **State Management**: React Hooks & Context
- **Routing**: React Router v6
- **Video/Chat**: @stream-io/video-react-sdk
- **Auth**: @clerk/clerk-react

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (Mongoose)
- **API**: RESTfull API structure
- **Environment**: Dotenv for configuration

## 📂 Project Structure

```bash
📦 talent-iq
├── 📂 backend         # Express.js server & API
│   ├── 📂 src
│   │   ├── 📂 controllers
│   │   ├── 📂 models
│   │   ├── 📂 routes
│   │   └── 📂 lib
│   ├── server.js      # Entry point
│   └── package.json
├── 📂 frontend        # React frontend application
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── 📂 hooks
│   │   └── 📂 api
│   └── package.json
└── package.json       # Root configuration for deployment
```

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Clerk Account (for Auth)
- GetStream Account (for Video)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tushar2682/chatapp.git
   cd chatapp
   ```

2. **Install Dependencies**
   ```bash
   # Install dependencies for both frontend and backend
   npm run build
   ```
   *Note: This command runs `npm install` in both directories.*

3. **Environment Setup**

   **Backend (.env)**
   Copy `backend/.env.example` to `backend/.env`:
   ```env
   PORT=5001
   DB_URL=mongodb://localhost:27017/talent-db
   ```

   **Frontend (.env)**
   Copy `frontend/.env.example` to `frontend/.env`:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   VITE_STREAM_API_KEY=your_stream_key
   ```

### Running the Application

1. **Start Backend**
   ```bash
   cd backend
   npm start
   ```
   Server will start on `http://localhost:5001`

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   App will be available at `http://localhost:5173`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
