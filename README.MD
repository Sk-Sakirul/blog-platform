# Blog Platform API

A RESTful Blog Platform API built with Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, and BCrypt Password Hashing.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

### Posts

- Create Post
- Get All Posts
- Get Single Post
- Update Own Post
- Delete Own Post
- Admin can delete any post
- Filter posts by tag
- Populate author information

### MongoDB Queries

- Standard Queries
- Aggregation Pipelines

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

## Project Structure

```bash
├── controllers
│   ├── auth.controller.js
│   └── post.controller.js
│
├── middlewares
│   └── authMiddleware.js
│
├── models
│   ├── user.model.js
│   └── post.model.js
│
├── routes
│   ├── auth.routes.js
│   └── post.routes.js
│
├── queries.js
├── server.js
├── .env
├── .env.example
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

```bash
cd blog-platform
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Run Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "success": true,
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@gmail.com",
    "role": "user"
  }
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "success": true,
  "token": "jwt_token"
}
```

---

### Posts

#### Create Post

```http
POST /api/posts
```

Headers

```http
Authorization: Bearer <token>
```

Request Body

```json
{
  "title": "Node.js",
  "content": "Learning Express",
  "tags": ["nodejs", "backend"]
}
```

---

#### Get All Posts

```http
GET /api/posts
```

---

#### Get Posts By Tag

```http
GET /api/posts?tag=nodejs
```

---

#### Get Single Post

```http
GET /api/posts/:id
```

---

#### Update Post

```http
PUT /api/posts/:id
```

Headers

```http
Authorization: Bearer <token>
```

---

#### Delete Post

```http
DELETE /api/posts/:id
```

Headers

```http
Authorization: Bearer <token>
```

---

## Authorization Rules

### User

- Create Post
- Update Own Post
- Delete Own Post

### Admin

- Create Post
- Update Own Post
- Delete Any Post

---

## HTTP Status Codes

| Status Code | Meaning |
|------------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Queries

All MongoDB query functions are available in:

```bash
queries.js
```

### Standard Queries

- Get popular posts
- Get Gmail users
- Get posts by tags
- Increment likes by author
- Delete old posts

### Aggregation Pipelines

- Post count per author
- Top authors by likes
- Monthly post activity
- Tag popularity
- Authors with no posts