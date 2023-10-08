
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar, closeSidebar }) {
  const handleSidebarClose = () => {
    closeSidebar();
  };

  useEffect(() => {
    // Add event listener to the document body to close the sidebar on outside click
    const handleOutsideClick = (e) => {
      if (openSidebarToggle && !e.target.closest("#sidebar")) {
        closeSidebar();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [openSidebarToggle, closeSidebar]);

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={handleSidebarClose}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Products">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Customers">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Inventory">
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Setting">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
