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
├── Client
    ├── .gitattributes
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.jsx
    │   ├── Components
    │   │   ├── BlogPage
    │   │   │   └── Blog.jsx
    │   │   ├── ContactPage
    │   │   │   └── Contact.jsx
    │   │   ├── CratPage
    │   │   │   └── Cart.jsx
    │   │   ├── DashboardPage
    │   │   │   ├── AddBlog.jsx
    │   │   │   ├── AddProduct.jsx
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── DashboardSidebar.jsx
    │   │   │   └── Subscribers.jsx
    │   │   ├── HomePage
    │   │   │   ├── Bodycontent.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   └── Header.jsx
    │   │   ├── LoginPage
    │   │   │   ├── LoginPage.jsx
    │   │   │   └── NewLoginUser.jsx
    │   │   └── MenuPage
    │   │   │   ├── Menu.jsx
    │   │   │   └── Sidebar.jsx
    │   ├── Contexts
    │   │   ├── BlogContext
    │   │   │   └── BlogProvider.jsx
    │   │   ├── CartContext
    │   │   │   └── CartProvider.jsx
    │   │   ├── LoginContext
    │   │   │   └── LoginProvider.jsx
    │   │   ├── SearchContext
    │   │   │   └── SearchProvider.jsx
    │   │   └── productContext
    │   │   │   └── ProductProvider.jsx
    │   ├── assets
    │   │   ├── Blogs
    │   │   │   ├── 5 Healthy Foods to Boost Your Energy.png
    │   │   │   ├── Behind the Scenes at Our Restaurant.png
    │   │   │   ├── Guilt-Free Desserts You’ll Love.png
    │   │   │   ├── Refreshing Drinks for Glowing Skin.png
    │   │   │   ├── The Healing Power of Spices.png
    │   │   │   ├── Why Eating Seasonal Foods Is Best for Your Health.png
    │   │   │   └── create a image of How Nutrition Affects Your Skin Care Routine.png
    │   │   ├── Company
    │   │   │   └── Logo.png
    │   │   └── Product
    │   │   │   ├── Beef Vindaloo.png
    │   │   │   ├── Burger.png
    │   │   │   ├── Cheese pizza.png
    │   │   │   ├── ChessBurger.png
    │   │   │   ├── Fish Curry.png
    │   │   │   ├── Lamb Rogan Josh.png
    │   │   │   ├── Paneer Butter Masala.png
    │   │   │   ├── Vegetarian Chickpea Curry.png
    │   │   │   ├── main-dish.jpeg
    │   │   │   ├── pokebowl.png
    │   │   │   ├── side-dish-1.jpeg
    │   │   │   └── side-dish-2.jpeg
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
├── DataBase
    └── Data.sql
├── README.md
└── Server
    ├── .gitattributes
    ├── .gitignore
    ├── .mvn
        └── wrapper
        │   └── maven-wrapper.properties
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    └── src
        ├── main
            ├── java
            │   └── com
            │   │   └── example
            │   │       └── Server
            │   │           ├── Controller
            │   │               ├── BlogsController.java
            │   │               ├── LoginUserController.java
            │   │               ├── ProductsController.java
            │   │               └── SubscribeController.java
            │   │           ├── ServerApplication.java
            │   │           ├── model
            │   │               ├── Blogs.java
            │   │               ├── LoginUser.java
            │   │               ├── Products.java
            │   │               └── Subscribe.java
            │   │           ├── repository
            │   │               ├── BlogRepo.java
            │   │               ├── LoginUserRepo.java
            │   │               ├── ProductRepo.java
            │   │               └── SubscribeRepo.java
            │   │           └── service
            │   │               ├── BlogService.java
            │   │               ├── LoginUserService.java
            │   │               ├── ProductService.java
            │   │               └── SubscribeService.java
            └── resources
            │   ├── application.properties
            │   └── static
            │       └── images
            │           ├── Blogs
            │               ├── 5 Healthy Foods to Boost Your Energy.png
            │               ├── Behind the Scenes at Our Restaurant.png
            │               ├── Guilt-Free Desserts You’ll Love.png
            │               ├── Refreshing Drinks for Glowing Skin.png
            │               ├── The Healing Power of Spices.png
            │               ├── Why Eating Seasonal Foods Is Best for Your Health.png
            │               └── create a image of How Nutrition Affects Your Skin Care Routine.png
            │           └── Product
            │               ├── Apple Crumble.png
            │               ├── BBQ Chicken Pizza.png
            │               ├── Beef Vindaloo.png
            │               ├── Cheese pizza.png
            │               ├── Chicken Alfredo.png
            │               ├── Chocolate Lava Cake.png
            │               ├── Classic Caesar Salad.png
            │               ├── Crispy Chicken Burger.png
            │               ├── Fish Curry.png
            │               ├── Fresh Caprese Salad.png
            │               ├── Gourmet Beef Burger.png
            │               ├── Grilled Salmon with Asparagus.png
            │               ├── Lamb Rogan Josh.png
            │               ├── Mediterranean Quinoa Salad.png
            │               ├── Mushroom Spinach Pizza.png
            │               ├── New York Cheesecake.png
            │               ├── Paneer Butter Masala.png
            │               ├── Pork Ribs with BBQ Glaze.png
            │               ├── Spaghetti Bolognese.png
            │               ├── Spicy Black Bean Burger.png
            │               ├── Spicy Pepperoni Pizza.png
            │               ├── Tandoori Chicken Skewers.png
            │               ├── Vegetable Lasagna.png
            │               └── Vegetarian Chickpea Curry.png
        └── test
            └── java
                └── com
                    └── example
                        └── Server
                            └── ServerApplicationTests.java


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
