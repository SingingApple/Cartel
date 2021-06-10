/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__content d-flex justify-content-center align-items-center p-2">
        <div className="sidebar__header mb-3">
          <img
            src="https://pbs.twimg.com/media/EtDVfFGUwAAxz-Y.jpg"
            alt="image"
            className="sidebar__header__image img-thumbnail"
          />
          <h6 className="pt-1">Dashboard</h6>
        </div>
        <div className="sidebar__navigation mt-2">
          <li className="py-3 my-1">Menu</li>
          <li className="py-3 my-1">Kitchen</li>
          <li className="py-3 my-1">User</li>
          <li className="py-3 my-1">Orders</li>
          <li className="py-3 my-1">Promotions</li>
          <li className="py-3 my-1">Banners</li>
          <li className="py-3 my-1">Finances</li>
          <li className="py-3 my-1">Reports</li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
