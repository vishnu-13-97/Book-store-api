<h1 align="center">📚✨ Book API CRUD ✨📚</h1> <p align="center"> A fully-featured, secure, and scalable REST API for managing books 📖 with user authentication, admin controls, image uploads via Cloudinary 🌩️, and robust CRUD functionality 💪. </p> <p align="center"> 🔗 <strong>Live API:</strong> <a href="https://book-store-api-a120.onrender.com" target="_blank">https://book-store-api-a120.onrender.com</a> </p>
🔥 Features
🔐 Authentication: Register & login with secure JWT-based authentication

👥 User Roles: Separate access levels for Users and Admins

📘 CRUD Operations: Create, read, update, and delete books

☁️ Cloudinary: Upload and manage book images seamlessly

📦 MongoDB: Flexible and scalable NoSQL database

🛡️ Security: Protected routes, hashed passwords (bcrypt), JWT token validation

🛠️ Tech Stack

Tech	Description
Node.js	JavaScript runtime environment
Express.js	Web framework for Node.js
MongoDB	NoSQL document database
Mongoose	ODM (Object Data Modeling) for MongoDB
JWT	Token-based authentication
bcryptjs	Password hashing
Cloudinary	Image storage & CDN
dotenv	Environment variable manager
multer	Middleware for file uploads

📂 Project Structure
📦 book-api-crud
├── 📁 config
│   ├── cloudinary.js
│   └── db.js
├── 📁 controllers
│   ├── authController.js
│   └── bookController.js
├── 📁 middlewares
│   └── authMiddleware.js
├── 📁 models
│   ├── User.js
│   └── Book.js
├── 📁 routes
│   ├── authRoutes.js
│   └── bookRoutes.js
├── 📄 server.js
└── 📄 .env

🚀 Getting Started

1. Clone the Repo
git clone https://github.com/yourusername/book-api-crud.git
cd book-api-crud

2. Install Dependencies
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
Server runs at: http://localhost:5000

📮 API Endpoints

🔑 Auth Routes
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Login and get token

📚 Book Routes
Method	Endpoint	Access	Description
GET	/api/books	Public	Get all books
GET	/api/books/:id	Public	Get a single book
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

roleMiddleware (if implemented): Restricts access to admin routes

cloudinaryUploader: Handles secure image uploads via Cloudinary


👑 Admin vs User Access
Feature	Admin	User
View Books	✅	✅
Add Book	✅	❌
Edit Book	✅	❌
Delete Book	✅	❌

🧠 Learnings & Challenges
Implemented secure JWT authentication with token expiration

Managed user roles and permissions effectively

Integrated Cloudinary for async image uploads and handling streams

Designed clean, modular controller and route logic

💡 Future Enhancements

📈 Admin Analytics Dashboard

📑 Swagger/OpenAPI Documentation

💬 Book Reviews & Ratings

🌐 Connect with Me
Feel free to reach out for collaborations, contributions, or feedback!

📜 License
This project is licensed under the MIT License.
You are free to use, distribute, and contribute to this project.

⭐️ Show Your Support
If you like this project, consider giving it a ⭐️ on GitHub!


