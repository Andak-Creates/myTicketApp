import React, { useState } from "react";
import { useAppContext } from "./ContextProvider";
import "../CSS/detailsForm.css";
import { MdOutlineEmail } from "react-icons/md";

const CollectDetails = () => {
  const {
    formData,
    handleChange,
    errors,
    handleSubmit,
    handleUpload,
    storedTicket,
  } = useAppContext();

  const goBack = () => {
    localStorage.removeItem("selectedTicket"); // Remove the ticket from local storage
    window.location.reload(); // Reload the page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="avatarHolder">
        <label>
          {formData.avatar ? "Change Profile Image" : "Upload Profile Photo"}
        </label>
        <button
          style={formData.avatar ? { height: "20px" } : {}}
          className="avatarBtn"
          type="button"
          onClick={handleUpload}
        >
          Upload Image
        </button>
        {formData.avatar && (
          <div>
            <img
              src={formData.avatar}
              alt="Avatar Preview"
              width="100"
              style={{ borderRadius: "10%", marginTop: "10px" }}
            />
          </div>
        )}
        {errors.avatar && <span style={{ color: "red" }}>{errors.avatar}</span>}
      </div>

      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <span style={{ color: "red" }}>{errors.fullName}</span>
        )}
      </div>

      <div>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="✉️ example@gmail.com "
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Special Requests:</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requests?"
          rows="2"
        ></textarea>
      </div>

      <div className="btns">
        <button onClick={goBack}>Back</button>
        <button type="submit">Get My Ticket</button>
      </div>
    </form>
  );
};

export default CollectDetails;
