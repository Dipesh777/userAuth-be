# 🚀 Auth & Users API (NestJS)

A backend REST API built with **NestJS**, implementing authentication and user management with JWT, TypeORM, and PostgreSQL.

---

## 🧰 Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **Database:** PostgreSQL (Supabase)
* **ORM:** TypeORM
* **Authentication:** JWT (JOSE)
* **Validation:** class-validator
* **Documentation:** Swagger

---

## 📁 Project Structure

```
src/
├── auth/                # Authentication module
├── users/               # Users module
│   ├── dto/             # Data Transfer Objects
│   ├── entities/        # TypeORM entities
├── common/              # Guards & shared logic
├── config/              # Config files
├── app.module.ts
├── main.ts
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd userAuth-be
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Configure environment variables

Create a `.env` file in the root:

```env
PORT=3000

DATABASE_URL=postgresql://username:password@host:5432/database

JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the application

```bash
npm run start:dev
```

---

## 📘 API Documentation

Swagger UI available at:

```
http://localhost:3000/api
```

---

## 🔐 Authentication APIs

### ➤ Login

**POST** `/auth/login`

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "access_token": "JWT_TOKEN"
}
```

---

### ➤ Get Current User

**GET** `/auth/me`
🔒 Requires Bearer Token

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 👤 Users APIs

### ➤ Create User

**POST** `/users`

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### ➤ Get All Users

**GET** `/users`
🔒 Requires JWT

---

### ➤ Update User

**PATCH** `/users/:id`

---

### ➤ Soft Delete User

**DELETE** `/users/:id`

* Marks user as deleted (`deleted_at`)

---

### ➤ Hard Delete User

**DELETE** `/users/hard/:id`

* Permanently deletes user

---

## 🔒 Authentication Flow

1. Create a user
2. Login to receive JWT token
3. Use token in Authorization header
4. Access protected routes

---

## 🧠 Key Features

* ✅ JWT Authentication using JOSE
* ✅ Password hashing with bcrypt
* ✅ Strict TypeScript (no `any`)
* ✅ DTO-based validation
* ✅ Soft delete support
* ✅ Swagger API documentation
* ✅ Clean modular architecture

---

## ⚠️ Notes

* Passwords are securely hashed before storage
* JWT tokens expire in 1 hour
* `synchronize: true` is enabled for development only

---

## 🚀 Future Improvements

* Pagination for users API
* Role-based authorization
* Refresh tokens
* Global exception handling
* Response DTOs (hide sensitive fields)

---

## 🧑‍💻 Author

**Dipesh Rajput**

---

## 📄 License

This project is for assessment purposes.
