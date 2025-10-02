# 🍔 Food E-Commerce Web Application 

A full-stack food e-commerce platform where users can browse food items, add them to the cart, and manage orders, built with modern frontend and backend technologies.

This project is my first full-stack application combining React.js, Tailwind CSS, Spring Boot, and MySQL with a focus on food delivery and grocery shopping.

# ✨ Features		

### 🛒 Food Browsing: View food items with details like name, price, description, category (e.g., snacks, fruits, beverages), and images.
### 🛍️ Cart Management: Add, remove, and update food items in the shopping cart.
### 💳 Order Management: Place and track orders seamlessly.
### 🔐 User Authentication: Secure login and registration system.
### 📦 Admin Panel (Optional): Manage food items, categories, and orders.
### 📊 Database Integration: MySQL database stores food items, users, and order data.

# 🖥️ Project Flow

User browses food items on the React.js frontend.

Add food items to the cart and proceed to checkout.

Frontend communicates with Spring Boot backend via REST APIs.

Backend handles authentication, order processing, and CRUD operations for food items.

MySQL stores all relevant data (food items, users, orders).

# 🚀 Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Spring Boot (Java)
Database: MySQL
Others: REST APIs, Axios, JavaScript

## 📂 Project Structure

```
Project/
├── frontend/ # React.js + Tailwind CSS
│ ├── src/
│ │ ├── assets/
│ │ ├── components/ # UI components like Homepage, Cart, Navbar etc
│ │ ├── Contexts/ # State management for cart, Loginuser, etc.
│ │ └── App.js # Main React app
├── backend/ # Spring Boot backend
│ ├── src/main/java/ # Controllers, Services, Repositories
│ │ ├── controllers/
│ │ ├── services/
│ │ └── repositories/
│ └── application.properties
├── database/ # MySQL scripts or schema
├── README.md # Project documentation
└── pom.xml # Maven dependencies
```

# 🚀 Installation
# Clone the repo
git clone <https://github.com/BhupatiNadar/FoodEcommerce.git>
cd <project-folder>

# Frontend setup
cd frontend
npm install
npm start

# Backend setup
cd backend
./mvnw spring-boot:run

# ▶️ Usage

### ⭐ Open your browser at http://localhost:5173 to view the frontend.

### ⭐ Browse food items, add them to your cart, and place orders using the React.js interface.

### ⭐ Backend handles API requests, stores data in MySQL, and processes orders.

# 📜 License

###MIT License – Free to use and modify.
