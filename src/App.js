import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Categories from "./Categories";
import Customers from "./Customers";
import Inventory from "./Inventory";
import Reports from "./Reports";
import Settings from "./Settings";

function App() {
   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

   const OpenSidebar = () => {
     setOpenSidebarToggle(!openSidebarToggle);
   };

   const closeSidebar = () => {
     setOpenSidebarToggle(false);
   };

  return (
    <div
      className={`grid-container ${openSidebarToggle ? "sidebar-open" : ""}`}
    >
      <Header OpenSidebar={OpenSidebar} />
       <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        closeSidebar={closeSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Products" element={<Products />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="Customers" element={<Customers />} />
        <Route path="Inventory" element={<Inventory />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

