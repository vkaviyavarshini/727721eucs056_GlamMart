import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
   
      <aside>
      
      <ul className="sidebar-menu">
        <li className="sidebar-item">Profle</li>
        <li className="sidebar-item">Category</li>
        <li className="sidebar-item">Shopping cart</li>
        <li className="sidebar-item">Payment</li>
        <li className="sidebar-item">Transaction report</li>
        <li className="sidebar-item">Sign Out</li>

        <div className="side1">
        <center><button>Back</button></center>
        </div>
        </ul>
    </aside>
  );
};

export default Sidebar;
