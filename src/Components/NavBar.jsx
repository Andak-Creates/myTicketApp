import React from "react";
import { GrLinkNext } from "react-icons/gr";

const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <img src="imgIcon.png" alt="Logo" />
        <h1>ticz</h1>
      </div>

      <ul className="navLinks">
        <li>Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>

      <div className="ticketLink">
        My Tickets <i className="bi bi-arrow-right"></i>
      </div>
    </nav>
  );
};

export default NavBar;
