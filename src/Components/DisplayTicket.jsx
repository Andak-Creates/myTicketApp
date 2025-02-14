import React, { useEffect, useState } from "react";
import BarcodeGenerator from "./BarcodeGenerator";
import "../CSS/myTicket.css";

const DisplayTicket = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState({});

  const goBack = () => {
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("userDetails");
    window.location.reload(); // Reload the page
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userDetails"));
    const ticketData = JSON.parse(localStorage.getItem("selectedTicket"));
    if (userData) setUserDetails([userData]); // Convert to array for mapping consistency
    if (ticketData) setSelectedTicket(ticketData);
  }, []);

  return (
    <div className="ticket">
      <h2>Your Ticket is Booked!</h2>
      <p style={{ color: "grey", fontSize: "12px", marginBottom: "10px" }}>
        Check your email for a copy or you can{" "}
        <span style={{ cursor: "pointer" }}>download</span>
      </p>

      <div className="holder">
        <div className="circle left-circle"></div>
        <div className="circle left-circle"></div>
        <div className="circle left-circle"></div>
        <div className="circle right-circle"></div>
        <div className="circle right-circle"></div>
        <div className="circle right-circle"></div>

        {userDetails.map((user, idx) => (
          <div className="myTicket" id={idx} key={idx}>
            <div className="torchlight"></div>
            <h1>Techember Fest "25</h1>
            <p>
              <i style={{ color: "red" }} className="bi bi-geo"></i>04 Rumens
              road, Ikoyi, Lagos
            </p>
            <p>March 15, 2025 | 7:00 PM</p>
            <img src={user.avatar} alt="" />

            {/* Detail Holder */}
            <div className="detailHolder">
              <div className="detail">
                <div>
                  <small>Full Name</small>
                  <p>{user.fullName}</p>
                </div>

                <div>
                  <small>Email</small>
                  <p>{user.email}</p>
                </div>

                <div>
                  <small>Ticket Type</small>
                  <p>{selectedTicket.accessType}</p>
                </div>

                <div>
                  <small>Ticket for</small>
                  <p>{selectedTicket.quantity}</p>
                </div>
              </div>

              <div className="specialRequest">
                <small>Special Request?</small>
                <p>{user.specialRequests}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="barcode">
          <div className="cut">
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
            <div className="tinyCut"></div>
          </div>
          <BarcodeGenerator />

          <div className="torchlight"></div>
        </div>
      </div>

      <div className="myBtns">
        <button onClick={goBack}>Book Another Ticket</button>
        <button>Download Ticket</button>
      </div>
    </div>
  );
};

export default DisplayTicket;
