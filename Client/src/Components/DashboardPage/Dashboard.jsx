import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar"; 
import AddProduct from "./AddProduct";
import AddBlog from "./AddBlog"; 
import Subscribers from "./Subscribers"


const Dashboard = () => {
  
  const [activePanel, setActivePanel] = useState("Add Product");

  
  const renderActivePanel = () => {
    switch (activePanel) {
      case "Add Product":
        return <AddProduct />;
      case "Add Blog":
        return <AddBlog />;
      case "Subscribers":
        return <Subscribers />;
      default:
        return <AddProduct />;
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">

      <DashboardSidebar
        activePanel={activePanel}
        onPanelChange={setActivePanel}
      />
      <main className="flex-grow p-8">{renderActivePanel()}</main>
    </div>
  );
};

export default Dashboard;
