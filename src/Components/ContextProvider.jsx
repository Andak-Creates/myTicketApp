import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  // Form Data State
  const [formData, setFormData] = useState({
    avatar: "",
    fullName: "",
    email: "",
    specialRequests: "",
  });

  const [ticketType, setTicketType] = useState({
    price: "",
    accessType: "",
    quantity: "",
  });

  //   Ticket type validation
  const [storedTicket, setStoredTicket] = useState(null);
  useEffect(() => {
    const ticket = JSON.parse(localStorage.getItem("selectedTicket"));
    if (ticket) {
      setStoredTicket(ticket);
    }
  }, []);

  // Error State
  const [errors, setErrors] = useState({});

  // Cloudinary Info
  const cloudName = "djfhbkxst";
  const uploadPreset = "ticketForm";

  // Handle Cloudinary Upload
  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: true,
        showCompletedButton: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload Success:", result.info.secure_url);
          setFormData({ ...formData, avatar: result.info.secure_url });
          setErrors({ ...errors, avatar: "" }); // Clear avatar error on success
        } else if (error) {
          console.error("Upload Error:", error);
          setErrors({
            ...errors,
            avatar: "Image upload failed. Please try again.",
          });
        }
      }
    );
  };
  // check if cloudinary is loaded
  useEffect(() => {
    if (!window.cloudinary) {
      console.error("Cloudinary widget is not loaded.");
    }
  }, []);

  // Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateImageUrl = (url) => {
    const imageUrlRegex =
      /(https?:\/\/res\.cloudinary\.com\/.*\.(?:png|jpg|jpeg|gif))/i;
    return imageUrlRegex.test(url);
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }

    // Email Validation
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email";
    }

    // Avatar URL Validation
    if (!formData.avatar) {
      validationErrors.avatar = "Please upload an image";
    } else if (!validateImageUrl(formData.avatar)) {
      validationErrors.avatar = "Please enter a valid Cloudinary image URL";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      localStorage.setItem("userDetails", JSON.stringify(formData));
      alert("Form submitted successfully!");
      // Here, you can trigger the ticket generation logic
    }

    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        errors,
        setErrors,
        handleSubmit,
        handleUpload,
        ticketType,
        setTicketType,
        storedTicket,
        setStoredTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
