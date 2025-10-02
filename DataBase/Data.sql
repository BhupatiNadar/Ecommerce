create database Ecommerce;
use Ecommerce;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    rating DECIMAL(3, 1),
    price DECIMAL(10, 2) NOT NULL,
    prep_time VARCHAR(20),
    cook_time VARCHAR(20),
    image_url VARCHAR(255)
);

INSERT INTO products (id, name, category, rating, price, prep_time, cook_time, image_url) VALUES
(1, 'Vegetarian Chickpea Curry', 'Curry', 5.0, 100.00, '5m', '20m', '/images/Product/Vegetarian Chickpea Curry.png'),
(2, 'Vindaloo', 'Curry', 5.0, 200.00, '5m', '20m', '/images/Product/Beef Vindaloo.png'),
(3, 'Creamy Paneer Butter Masala', 'Curry', 5.0, 150.00, '5m', '20m', '/images/Product/Paneer Butter Masala.png'),
(4, 'Lamb Rogan Josh', 'Curry', 5.0, 50.00, '5m', '20m', '/images/Product/Lamb Rogan Josh.png'),
(5, 'Fish Curry with Coconut', 'Curry', 5.0, 100.00, '5m', '20m', '/images/Product/Fish Curry.png'),
(6, 'Classic Cheese Pizza', 'Pizza', 4.3, 230.00, '5m', '20m', '/images/Product/Cheese pizza.png');

INSERT INTO products (id, name, category, rating, price, prep_time, cook_time, image_url) VALUES
(7, 'Mushroom & Spinach Pizza', 'Pizza', 4.5, 250.00, '10m', '18m', '/images/Product/Mushroom Spinach Pizza.png'),
(8, 'Spicy Pepperoni Pizza', 'Pizza', 4.6, 260.00, '8m', '17m', '/images/Product/Spicy Pepperoni Pizza.png'),
(9, 'BBQ Chicken Pizza', 'Pizza', 4.7, 280.00, '10m', '20m', '/images/Product/BBQ Chicken Pizza.png'),
(10, 'Mediterranean Quinoa Salad', 'Salad', 4.8, 180.00, '15m', '0m', '/images/Product/Mediterranean Quinoa Salad.png'),
(11, 'Classic Caesar Salad', 'Salad', 4.2, 160.00, '10m', '0m', '/images/Product/Classic Caesar Salad.png'),
(12, 'Fresh Caprese Salad', 'Salad', 4.9, 190.00, '7m', '0m', '/images/Product/Fresh Caprese Salad.png'),
(13, 'Gourmet Beef Burger', 'Burger', 4.5, 320.00, '10m', '15m', '/images/Product/Gourmet Beef Burger.png'),
(14, 'Spicy Black Bean Burger', 'Burger', 4.4, 290.00, '12m', '18m', '/images/Product/Spicy Black Bean Burger.png'),
(15, 'Crispy Chicken Burger', 'Burger', 4.3, 300.00, '8m', '14m', '/images/Product/Crispy Chicken Burger.png');


INSERT INTO products (id, name, category, rating, price, prep_time, cook_time, image_url) VALUES
(16, 'Vegetable Lasagna', 'Pasta', 4.6, 220.00, '20m', '30m', '/images/Product/Vegetable Lasagna.png'),
(17, 'Chicken Alfredo', 'Pasta', 4.5, 270.00, '15m', '20m', '/images/Product/Chicken Alfredo.png'),
(18, 'Spaghetti Bolognese', 'Pasta', 4.3, 230.00, '15m', '25m', '/images/Product/Spaghetti Bolognese.png'),
(19, 'Tandoori Chicken Skewers', 'Grill', 4.7, 310.00, '15m', '12m', '/images/Product/Tandoori Chicken Skewers.png'),
(20, 'Grilled Salmon with Asparagus', 'Grill', 4.8, 350.00, '10m', '15m', '/images/Product/Grilled Salmon with Asparagus.png'),
(21, 'Pork Ribs with BBQ Glaze', 'Grill', 4.6, 380.00, '20m', '40m', '/images/Product/Pork Ribs with BBQ Glaze.png'),
(22, 'Chocolate Lava Cake', 'Dessert', 4.9, 120.00, '10m', '12m', '/images/Product/Chocolate Lava Cake.png'),
(23, 'New York Cheesecake', 'Dessert', 4.7, 130.00, '15m', '0m', '/images/Product/New York Cheesecake.png'),
(24, 'Apple Crumble', 'Dessert', 4.5, 110.00, '10m', '20m', '/images/Product/Apple Crumble.png');



CREATE TABLE blogs (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    image VARCHAR(255) NOT NULL
);


INSERT INTO blogs (id, title, content, date, image) VALUES
(1, '5 Healthy Foods to Boost Your Energy', 'Discover nutrient-rich meals that give you energy throughout the day. From quinoa bowls to fresh salads, healthy eating can be both delicious and satisfying.', '2025-09-20', '/images/Blogs/5 Healthy Foods to Boost Your Energy.png'),
(2, 'How Nutrition Affects Your Skin Care Routine', 'Good skin starts from within! Learn how foods rich in antioxidants, vitamins, and hydration help you maintain glowing and healthy skin naturally.', '2025-08-30', '/images/Blogs/create a image of How Nutrition Affects Your Skin Care Routine.png'),
(3, 'Why Eating Seasonal Foods Is Best for Your Health', 'Seasonal fruits and vegetables are fresher, tastier, and packed with nutrients. Discover the benefits of eating with the seasons and how it supports local farmers.', '2025-08-12', '/images/Blogs/Why Eating Seasonal Foods Is Best for Your Health.png'),
(4, 'The Healing Power of Spices', 'From turmeric’s anti-inflammatory properties to ginger’s digestive benefits, spices are nature’s medicine. Learn how to incorporate them into your meals.', '2025-07-25', '/images/Blogs/The Healing Power of Spices.png'),
(5, 'Behind the Scenes at Our Restaurant', 'Take a peek into our kitchen! Meet our chefs, see how we source fresh ingredients, and learn what makes our dishes unique and flavorful.', '2025-07-01', '/images/Blogs/Behind the Scenes at Our Restaurant.png'),
(6, 'Guilt-Free Desserts You’ll Love', 'Healthy doesn’t mean boring! Try our new range of low-sugar, natural-ingredient desserts that satisfy your sweet tooth without compromising on health.', '2025-06-15', '/images/Blogs/Guilt-Free Desserts You’ll Love.png'),
(7, 'Refreshing Drinks for Glowing Skin', 'Hydration is key to skin health. Explore juices, smoothies, and infused waters that are rich in vitamins and keep you refreshed.', '2025-06-01', '/images/Blogs/Refreshing Drinks for Glowing Skin.png');



create table Login_User(
 id INT PRIMARY KEY AUTO_INCREMENT,
 Email VARCHAR(255) NOT NULL,
Password VARCHAR(255) NOT NULL,
role VARCHAR(100) NOT null
);

insert into Login_User(Email,Password,role)values
("admin@gmail.com","1234","admin"),
("Bhupati@gmail.com","1234","user"),
("Meet@gmail.com","1234","user"),
("Devang@gmail.com","1234","user");


drop table subscribe;

create table subscribe(
id int primary key auto_increment,
email varchar(255) not null
);