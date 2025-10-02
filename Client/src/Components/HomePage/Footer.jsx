import React,{useState} from "react";


import MainDish from "../../assets/Product/main-dish.jpeg";
import SideDish1 from "../../assets/Product/side-dish-1.jpeg";
import SideDish2 from "../../assets/Product/side-dish-2.jpeg";


import {
  FaShippingFast,
  FaStar,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const features = [
  {
    icon: <FaShippingFast size={24} />,
    title: "Fast Food Delivery",
    description:
      "Get your favorite meals delivered hot and fresh to your door in just a few minutes.",
  },
  {
    icon: <MdSecurity size={24} />,
    title: "Secure Online Payments",
    description:
      "Pay securely using your preferred payment methods with a simple and quick checkout.",
  },
  {
    icon: <BiSupport size={24} />,
    title: "24/7 Order Support",
    description:
      "Our support team is always ready to assist you with any order queries or issues.",
  },
];

const testimonials = [
  {
    name: "Donald Jackman",
    title: "Content Creator",
    image: "https://placehold.co/100x100/E9A8A9/333333?text=DJ",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    bgColor: "bg-pink-100",
  },
  {
    name: "Richard Nelson",
    title: "Instagram Influencer",
    image: "https://placehold.co/100x100/D4C9B3/333333?text=RN",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    bgColor: "bg-stone-200",
  },
  {
    name: "James Washington",
    title: "Digital Content Creator",
    image: "https://placehold.co/100x100/D4C3F4/333333?text=JW",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    bgColor: "bg-purple-100",
  },
];

const Footer = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   const handleSubmit = async (e) => {
     
     e.preventDefault();
     setMessage("");


     const API_URL = "http://localhost:8080/api/subscribe"; 

     try {
       const response = await fetch(API_URL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ email: email }),
       });

       if (!response.ok) {
         const errorData = await response.json();
         throw new Error(
           errorData.message || `HTTP error! Status: ${response.status}`
         );
       }

       setMessage("Thank you for subscribing!");
       setEmail(""); 
     } catch (error) {
       console.error("Subscription failed:", error);
       setMessage(`Subscription failed: ${error.message}`);
     }
   };


  return (
    <>
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide">
              Discover our <br />
              <span className="text-orange-500">Food App's Key Features!</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Discover fresh foods that delight your taste, nourish your body,
              and bring joy to every meal.
            </p>
            <div className="flex flex-col gap-8 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-xl shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[32rem]">
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={MainDish}
                alt="Main Dish"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={SideDish1}
                alt="Side Dish 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={SideDish2}
                alt="Side Dish 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bgColor} p-8 rounded-lg shadow-lg flex flex-col`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 my-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gray-800" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.review}
                </p>
                <a
                  href="#"
                  className="text-gray-800 font-semibold mt-4 hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">Flavourazzi</h2>
            <p className="text-sm">
              From our kitchen to your table, enjoy a diverse menu of delicious
              meals made with the freshest ingredients.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cancellation Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">STAY UPDATED</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-l-md p-2 text-white focus:outline-none focus:border-orange-500"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded-r-md hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {message && <p className="text-sm mt-2 text-white">{message}</p>}
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
