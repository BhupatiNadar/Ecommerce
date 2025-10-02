import React from "react";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRateReview,
  MdOutlineMessage,
  MdOutlineEmail,
} from "react-icons/md";

const adminLinks = [
  { name: "Add Product", icon: <MdOutlineAddShoppingCart size={22} /> },
  { name: "Add Blog", icon: <MdOutlineRateReview size={22} /> },
  { name: "Subscribers", icon: <MdOutlineEmail size={22} /> },
];


const DashboardSidebar = ({ activePanel, onPanelChange }) => {
  return (
    <div className="w-72 bg-white flex flex-col rounded-xl shadow-lg p-6 space-y-4 mx-2 mt-2 h-screen flex-shrink-0">
      <div className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">
        Admin Panel
      </div>
      <nav className="flex flex-col gap-2">
        {adminLinks.map((link, index) => {

          const isActive = activePanel === link.name;

          return (
            <div
              key={index}
              onClick={() => onPanelChange(link.name)}
              className={`flex items-center gap-4 p-3 rounded-lg font-medium cursor-pointer transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md" 
                    : "text-gray-600 hover:bg-orange-100 hover:text-orange-600" 
                }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
