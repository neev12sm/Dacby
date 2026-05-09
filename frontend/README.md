# Hacker News Clone - MERN Stack Project

A full-stack Hacker News style web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

Users can:

- Register and Login
- Read latest tech/news articles
- Save bookmarks
- View only their personal bookmarked posts
- Access protected routes securely using JWT Authentication

This project is inspired by Hacker News and demonstrates full-stack development with authentication and user-specific data handling.

---

# Technologies Used

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Main Features

## Authentication System
- User Registration
- User Login
- JWT Token Authentication
- Password Hashing using bcryptjs

## News Features
- Fetch Hacker News Articles
- Display News Cards
- Open News Links
- Dynamic Rendering of News Data

## Bookmark System
- Save Articles to Bookmarks
- Delete Saved Bookmarks
- User-specific bookmarks
- Only logged-in users can save bookmarks

## Protected Routes
- Bookmark page protected
- Unauthorized users redirected to login

## Alerts & Validation
- Alert if non-logged-in user tries to save bookmark
- Login/Register validation
- Error handling

---

# Project Structure

```bash
hackernews-project/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

# Installation Guide

## Step 1: Clone Repository

```bash
git clone <your-github-repository-link>
```

---

## Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Step 3: Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# Running The Project

## Start Backend Server

```bash
cd backend
npm start
```

Backend server runs on:

```bash
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication Routes

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Bookmark Routes

### Get User Bookmarks

```http
GET /api/bookmarks
```

### Add Bookmark

```http
POST /api/bookmarks
```

### Delete Bookmark

```http
DELETE /api/bookmarks/:id
```

---

# Authentication Workflow

1. User registers account
2. Password gets encrypted using bcrypt
3. User logs in
4. JWT token generated
5. Token stored in localStorage
6. Protected routes verify token
7. User accesses personal bookmarks only

---

# Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- User-specific Data Protection

---

# Future Improvements

- Search News Articles
- Dark Mode
- User Profile
- Like/Comment System
- Pagination
- Responsive Mobile Design
- Deploy using Render & Vercel

---

# Learning Outcomes

This project helps understand:

- MERN Stack Development
- REST APIs
- Authentication & Authorization
- MongoDB Database Operations
- React Routing
- Protected Routes
- Full-stack Project Structure

---

# Author

Developed as a MERN Stack learning project.

---

# License

This project is for educational and learning purposes.