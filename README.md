<h1 align="center">📚✨ Book API CRUD ✨📚</h1>
<p align="center">
  A fully-featured, secure and scalable REST API for managing books 📖 with user authentication, admin control, image uploads via Cloudinary 🌩️, and robust CRUD functionality 💪.
</p>

---

## 🔥 Features

- 🔐 **Authentication**: Register & Login with secure JWT-based authentication
- 👥 **User Roles**: Separate access for **Users** & **Admins**
- 📘 **CRUD Operations**: Create, Read, Update, Delete books
- ☁️ **Cloudinary**: Upload and manage book images
- 📦 **MongoDB**: Robust and flexible database storage
- 🛡️ **Security**: Protected routes, encrypted passwords (bcrypt), token validation

---

## 🛠️ Tech Stack

| Tech            | Description                          |
|-----------------|--------------------------------------|
| **Node.js**     | JavaScript runtime environment       |
| **Express.js**  | Backend framework                    |
| **MongoDB**     | NoSQL database                       |
| **Mongoose**    | ODM for MongoDB                      |
| **JWT**         | JSON Web Tokens for auth             |
| **bcryptjs**    | Password hashing                     |
| **Cloudinary**  | Image storage and CDN                |
| **dotenv**      | Environment variable manager         |
| **multer**      | Middleware for file uploads          |

---

## 📂 Project Structure

📦 book-api-crud
├── 📁 config
│ └── cloudinary.js
| └── db.js
├── 📁 controllers
│ └── authController.js
│ └── bookController.js
├── 📁 middlewares
│ └── authMiddleware.js
├── 📁 models
│ └── User.js
│ └── Book.js
├── 📁 routes
│ └── authRoutes.js
│ └── bookRoutes.js
├── 📄 server.js
└── 📄 .env


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/book-api-crud.git
cd book-api-crud
```
### 2. Install Dependencies

npm install

3. Configure Environment Variables
Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. Run the Server
npm start

Server runs on http://localhost:5000

📮 API Endpoints
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and get token

📚 Book Routes
Method	Endpoint	Access	Description
GET	/api/books	Public	Get all books
GET	/api/books/:id	Public	Get single book
POST	/api/books	Admin	Add a new book
PUT	/api/books/:id	Admin	Update a book
DELETE	/api/books/:id	Admin	Delete a book

🧪 Example Book Object

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "A Handbook of Agile Software Craftsmanship",
  "image": "https://res.cloudinary.com/yourcloud/image/upload/v.../clean-code.jpg"
}

🛡️ Middleware Highlights
authMiddleware: Protects routes using JWT verification

roleMiddleware: Restricts certain routes to admin users only

cloudinaryUploader: Handles secure image uploads to Cloudinary


👑 Admin vs User
Feature	Admin	User
View Books	✅	✅
Add Book	✅	❌
Edit Book	✅	❌
Delete Book	✅	❌

🧠 Learnings & Challenges
Implementing secure JWT-based login and token expiration

Managing roles and permissions effectively

Integrating file uploads with Cloudinary and handling async file streaming

Writing clean, modular controller functions

💡 Future Enhancements
🧾 Pagination & Filtering

🔍 Search Functionality

📈 Analytics Dashboard for Admin

📑 Swagger/OpenAPI Docs

💬 Book Reviews & Ratings

🌐 Connect with Me


📜 License
This project is licensed under the MIT License. Feel free to use, contribute, and improve!

⭐️ If you like this project, don't forget to star it!



