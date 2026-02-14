# Real Estate Backend API

Production-ready backend for Real Estate Website with Admin Panel built using Node.js, Express.js, and MongoDB.

## 🚀 Features

- **Session-based Authentication** - Simple credential-based admin login
- **Section Management** - Manage website sections (hero, overview, connectivity, about, construction)
- **Amenities CRUD** - Full CRUD operations for property amenities
- **FAQ Management** - Complete FAQ management system
- **Auto-seeding** - Automatically creates default sections on first run
- **CORS Enabled** - Ready for frontend integration
- **Error Handling** - Comprehensive error handling and validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🛠 Installation

1. **Clone the repository**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://localhost:27017/real-estate-db
   FRONTEND_URL=http://localhost:3000
   SESSION_SECRET=your-super-secret-session-key
   ```

4. **Start the server**
   
   Development mode (with auto-restart):
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

## 🔐 Admin Credentials

**Email:** `admin@gmail.com`  
**Password:** `1234`

> ⚠️ **Note:** These are fixed credentials for demonstration. For production, implement proper password hashing and user management.

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/login` | Public | Admin login |
| POST | `/api/auth/logout` | Private | Admin logout |

**Login Request Body:**
```json
{
  "email": "admin@gmail.com",
  "password": "1234"
}
```

---

### Sections

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/sections` | Public | Get all sections |
| GET | `/api/sections/:sectionName` | Public | Get section by name |
| PUT | `/api/sections/:id` | Private | Update section |

**Available Sections:**
- `hero`
- `overview`
- `connectivity`
- `about`
- `construction`

**Update Section Request Body:**
```json
{
  "title": "Welcome to Our Property",
  "subtitle": "Your Dream Home Awaits",
  "description": "Discover luxury living..."
}
```

---

### Amenities

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/amenities` | Public | Get all amenities |
| POST | `/api/amenities` | Private | Create amenity |
| PUT | `/api/amenities/:id` | Private | Update amenity |
| DELETE | `/api/amenities/:id` | Private | Delete amenity |

**Create/Update Amenity Request Body:**
```json
{
  "title": "Swimming Pool",
  "description": "Olympic-sized swimming pool with kids area"
}
```

---

### FAQs

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/faqs` | Public | Get all FAQs |
| POST | `/api/faqs` | Private | Create FAQ |
| PUT | `/api/faqs/:id` | Private | Update FAQ |
| DELETE | `/api/faqs/:id` | Private | Delete FAQ |

**Create/Update FAQ Request Body:**
```json
{
  "question": "What are the payment options?",
  "answer": "We offer flexible payment plans including EMI options..."
}
```

---

### Health Check

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/health` | Public | Server health check |

## 🗂 Folder Structure

```
server/
│
├── controllers/
│   ├── authController.js       # Authentication logic
│   ├── sectionController.js    # Section management
│   ├── amenityController.js    # Amenity CRUD
│   └── faqController.js        # FAQ CRUD
│
├── models/
│   ├── Section.js              # Section schema
│   ├── Amenity.js              # Amenity schema
│   └── FAQ.js                  # FAQ schema
│
├── routes/
│   ├── authRoutes.js           # Auth endpoints
│   ├── sectionRoutes.js        # Section endpoints
│   ├── amenityRoutes.js        # Amenity endpoints
│   └── faqRoutes.js            # FAQ endpoints
│
├── middleware/
│   └── authMiddleware.js       # Session validation
│
├── config/
│   └── db.js                   # MongoDB connection & seeding
│
├── server.js                   # Main server file
├── .env.example                # Environment template
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🔒 Authentication Flow

1. **Login:** Send POST request to `/api/auth/login` with credentials
2. **Session Created:** Server creates a session and returns success
3. **Protected Routes:** Include session cookie in subsequent requests
4. **Logout:** Send POST request to `/api/auth/logout` to destroy session

## 🌐 CORS Configuration

The server is configured to accept requests from the frontend URL specified in the `.env` file. Update `FRONTEND_URL` to match your frontend application URL.

## 🚀 Deployment

### Environment Variables for Production

Ensure these are set in your production environment:

- `NODE_ENV=production`
- `MONGO_URI` - Your MongoDB connection string
- `FRONTEND_URL` - Your deployed frontend URL
- `SESSION_SECRET` - Strong secret key for sessions
- `PORT` - Server port (optional, defaults to 5000)

### Production Considerations

1. **Session Store:** For production, use a persistent session store like `connect-mongo`:
   ```bash
   npm install connect-mongo
   ```

2. **Security Headers:** Consider adding `helmet` for security headers:
   ```bash
   npm install helmet
   ```

3. **Rate Limiting:** Implement rate limiting to prevent abuse:
   ```bash
   npm install express-rate-limit
   ```

4. **HTTPS:** Ensure your server runs behind HTTPS in production

## 📦 Testing with Postman

Import the `Real-Estate-API.postman_collection.json` file into Postman to test all endpoints.

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check `MONGO_URI` in `.env` file
- Verify network connectivity to MongoDB

### Session Not Persisting
- Check if cookies are enabled
- Verify `FRONTEND_URL` matches your frontend domain
- Ensure `credentials: true` in CORS configuration

### 401 Unauthorized Errors
- Ensure you're logged in first
- Check if session cookie is being sent with requests
- Verify session hasn't expired (24-hour default)

## 📄 License

ISC

## 👨‍💻 Support

For issues or questions, please create an issue in the repository.
