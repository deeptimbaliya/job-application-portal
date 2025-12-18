# Job Application Portal API

A RESTful API built using **Node.js, Express.js, and MongoDB** that allows users to register, authenticate, upload resumes, apply for jobs, and view their applications.

This project demonstrates backend fundamentals such as authentication, file uploads, RESTful API design, validation, and deployment.

---

## 🚀 Features

- User Registration & Login with JWT Authentication
- Strong Email & Password Validation
- Secure Password Hashing (bcrypt)
- Resume Upload using Multer
- Apply for Job Listings
- View User Applications
- Centralized Error Handling
- MongoDB Database Integration
- Cloud Deployment (Render)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Security:** bcryptjs
- **Deployment:** Render

---

## 📁 Project Structure

```
job-application-portal/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── Job-Application-Portal.postman_collection.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository
```bash
git clone <your-github-repo-url>
cd job-application-portal
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create `.env` File
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start Server
```bash
npm run dev
```

Server will run on:
```
http://localhost:5000
```

---

## 🔐 Authentication & Validation

### Password Rules
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

### Authentication Method
- JWT tokens
- Protected routes using middleware
- Token passed via `Authorization: Bearer <token>`

---

## 📌 API Endpoints

### 🔑 Auth Routes
| Method |     Endpoint         | Description   |
|--------|----------------------|---------------|
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |

---

### 💼 Job Routes
| Method | Endpoint    | Description             |
|--------|-------------|-------------------------|
| GET    | `/api/jobs` | Get sample job listings |

---

### 📄 Application Routes
| Method | Endpoint                            | Description                   |
|--------|-------------------------------------|-------------------------------|
| POST   | `/api/application/apply`           | Apply for job (Resume Upload) |
| GET    | `/api/application/myapplications` | View applied jobs             |

---

## 📤 Resume Upload

- Upload handled via **Multer**
- Allowed formats: `PDF, DOC, DOCX`
- Field name: `resume`
- Files stored in `src/uploads/`

---

## 🧪 API Testing

- Postman collection included:
```
Job-Application-Portal.postman_collection.json
```

---

## 🌍 Deployment

The API is deployed on **Render**.

Start command:
```bash
node src/server.js
```

---

## 👨‍💻 Author

**Deep Timbaliya**  
