import { useEffect, useState } from "react";
import React from "react";
import { useAppContext } from "./ContextProvider";
import { Ticketype } from "./Tools";
import "../CSS/selectTicket.css";

const SelectTicket = () => {
  const { ticketType, setTicketType, storedTicket } = useAppContext();
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    const storedTicket = JSON.parse(localStorage.getItem("selectedTicket"));
    if (storedTicket) {
      setTicketType(storedTicket); // Update state with the stored ticket object
    }
  }, [setTicketType]);

  const handleTicketSelect = (ticket, idx) => {
    setTicketType({
      ...ticketType,
      price: ticket.price,
      accessType: ticket.accessType,
    });

    setSelectedIdx(idx);
  };

  const handleQuantityChange = (e) => {
    setTicketType({
      ...ticketType,
      quantity: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("selectedTicket", JSON.stringify(ticketType));
    alert("Ticket added to cart!");
    window.location.reload(); // Reloads the page
  };
  return (
    <form className="typeForm" onSubmit={handleSubmit}>
      <div className="themeDetail">
        <h1>Techember Fest "25</h1>
        <p>Join us for an unforgettable experience at</p>
        <p>Techember Fest! Secure your spot now</p>
        <div>
          <small>04 Rumens road, Ikoyi, Lagos</small>{" "}
          <small>March 15, 2025 | 7:00 PM</small>
        </div>
      </div>

      <p>Select Ticket Type:</p>

      <div className="typeHolder">
        {Ticketype.map((ticket, idx) => (
          <div
            className="tickectType"
            id={idx}
            key={idx}
            onClick={() => handleTicketSelect(ticket, idx)}
            style={{
              backgroundColor:
                selectedIdx === idx ? "#19768669" : "transparent",
            }}
          >
            <h2>{ticket.price}</h2>
            <p>{ticket.accessType}</p>
            <small>{ticket.date}</small>
          </div>
        ))}
      </div>

      <div className="mySelect">
        <label>Number of Ticket:</label>
        <select onChange={handleQuantityChange} value={ticketType.quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default SelectTicket;
