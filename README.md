# Real Estate Project Assignment (LIMS Roofing)

A comprehensive real estate website solution featuring a modern public landing page and a secure, feature-rich admin dashboard for content management. Built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

### Public Website
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.
- **Dynamic Content**: Sections, amenities, and FAQs are dynamically fetched from the backend.
- **Modern UI**: Clean and professional interface using a custom design system and Tailwind CSS.

### Admin Panel (`/admin`)
- **Secure Authentication**: Protected routes ensuring only authorized personnel access the dashboard.
- **Split-Screen Login**: Modern, branded login page with visual feedback.
- **Dashboard Overview**: At-a-glance statistics for total sections, amenities, and FAQs.
- **Sidebar Navigation**: Persistent, easy-to-use sidebar for navigating between management sections.
- **Content Management**:
    - **Sections**: Update titles, subtitles, and descriptions for main website sections.
    - **Amenities**: Add, edit, and delete property amenities with image support.
    - **FAQs**: Manage customer questions and answers.
- **Modal-Based Editing**: Clean, non-intrusive forms for adding and editing content.

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Icons**: Lucide React
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Notifications**: React Toastify

### Backend (`/server`)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Express Session
- **Utilities**: Dotenv, CORS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Local or Atlas connection string)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Real-Estate-Project-Assignment
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file based on the example:
```bash
cp .env.example .env
```
*Update the `.env` file with your MongoDB URI and Session Secret.*

Start the backend server:
```bash
npm run dev
```
*Server runs on `http://localhost:5000` by default.*

### 3. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Create a `.env` file based on the example (if applicable, usually for API URL):
```bash
cp .env.example .env
```

Start the frontend development server:
```bash
npm run dev
```
*Client runs on `http://localhost:5173` by default.*

## 📂 Project Structure

```
/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Admin & Public)
│   │   ├── context/        # React Context (AuthContext)
│   │   ├── pages/          # Page components (Home, AdminDashboard, etc.)
│   │   ├── services/       # API integration utilities
│   │   └── index.css       # Global styles and Tailwind configuration
│   └── package.json
│
├── server/                 # Backend Express Application
│   ├── config/             # Database configuration
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   └── server.js           # Entry point
│
└── README.md               # Project Documentation
```

## 🔐 Admin Credentials
*(Note: These are hardcoded for demonstration purposes in `server/controllers/authController.js`)*
- **Email**: `admin@gmail.com`
- **Password**: `1234`
